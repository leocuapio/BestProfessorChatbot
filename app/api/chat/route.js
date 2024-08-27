import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

const systemPrompt = `
You are an AI-powered assistant designed to help students find the best professors based on their specific queries. Your task is to analyze each user’s question, understand the criteria they are seeking in a professor, and provide the top 3 professors that match their needs.

For each user query:

1. Extract the key criteria from the query (e.g., subject, teaching style, rating, difficulty, etc.).
2. Use retrieval-augmented generation (RAG) to fetch the most relevant data from your database of professors.
3. Present the top 3 professors that best match the user’s criteria. For each professor, include:

- The professor’s name.
- The subject(s) they teach.
- Their overall rating.
- A brief description highlighting why they are a good match based on the user’s query.
- Any relevant student feedback or comments, if available.

Please add a newline before and after each professor's details for better readability.

If the query is too broad or lacks detail, ask clarifying questions to narrow down the criteria and provide a more accurate recommendation.

Always prioritize the accuracy and relevance of your recommendations to ensure students find the best possible professors based on their needs.

This system prompt sets clear guidelines for the AI to follow when interacting with students and ensures that the agent uses RAG effectively to provide personalized recommendations.
`;

export async function POST(req) {
  const data = await req.json();
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");
  const openai = new OpenAI();

  const text = data[data.length - 1].content;
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });

  const results = await index.query({
    topK: 5,
    includeMetadata: true,
    vector: embedding.data[0].embedding,
  });

  let resultString = "\n";
  results.matches.forEach((match) => {
    resultString += `
Professor: ${match.id}
Subject: ${match.metadata.subject}
Rating: ${match.metadata.stars}
Review: ${match.metadata.review || "No review available"}
    
`;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      ...lastDataWithoutLastMessage,
      { role: "user", content: lastMessageContent },
    ],
    model: "gpt-3.5-turbo",
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}
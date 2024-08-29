'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box, AppBar, Toolbar, Link, IconButton, TextField } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Docs() {
  const router = useRouter();

  return (
    <div>
      {/* Header with Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Button
            onClick={() => router.push('/')}
            sx={{ textTransform: 'none', fontSize: '1.25rem', color: 'inherit' }}
          >
            BestProfessorAI
          </Button>
          <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} gap="2rem">
            <Link href="/features" variant="body1" color="textPrimary" sx={{ textDecoration: 'none' }}>
              Features
            </Link>
            <Link href="/contact" variant="body1" color="textPrimary" sx={{ textDecoration: 'none' }}>
              Contact
            </Link>
            <Link href="/about" variant="body1" color="textPrimary" sx={{ textDecoration: 'none' }}>
              About
            </Link>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <SignedOut>
              <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} href="/sign-in">
                Login
              </Button>
              <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} href="/sign-up">
                Sign Up
              </Button>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ marginTop: '3rem', textAlign: 'center', paddingTop: '2rem' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold' }} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" paragraph>
          Find detailed information on how to use BestProfessorAI and make the most out of its features.
        </Typography>
      </Container>

      {/* Contact Form */}
      <Box
        style={{
          marginTop: '3rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginBottom: '3rem',
        }}
      >
        <Container p >
        <form action="https://formspree.io/f/{your-form-id}" method="POST">
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Email"
            name="_replyto"
            type="email"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Your Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
            Send Message
          </Button>
        </form>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0a1929', color: '#fff', padding: '2rem 0' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Simple. Consistent. Useful.
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: '600px', margin: '0 auto' }}>
            We’re here to improve your academic experience with an AI-powered platform for professor reviews. Our chatbot makes it easy to share and discover feedback, helping you make informed decisions and enhance your learning journey.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" sx={{ margin: '0 0.5rem' }} href='/contact'>
            Contact us
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="body2" component="p">
            © 2024 by LC. All Rights Reserved.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <IconButton color="inherit" href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
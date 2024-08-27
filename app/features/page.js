'use client'
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box, AppBar, Toolbar, Link, IconButton, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Features() {
  const router = useRouter();

  const features = [
    {
      title: 'AI-Powered Professor Reviews',
      description: 'Get detailed reviews generated by AI, providing you with deep insights into the strengths and weaknesses of professors.',
      image: '/gpu.jpg', // Replace with the actual path to your image
    },
    {
      title: 'Personalized Recommendations',
      description: 'Receive tailored course and professor suggestions based on your learning style and preferences.',
      image: '/brain.jpg',
    },
    {
      title: 'Seamless User Experience',
      description: 'Enjoy an intuitive interface that makes it easy to find the information you need quickly and efficiently.',
      image: '/keyboard.jpg',
    }
  ];

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
          Features
        </Typography>
        <Typography variant="h6" paragraph>
          Discover the key features of BestProfessorAI that make it the best choice for students looking to get feedback on their professors.
        </Typography>
      </Container>

      {/* Features Section */}
      <Container>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                image={feature.image}
                alt={feature.title}
                sx={{ height: 140 }}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>

      {/* Specific Content for Features Page */}
      <Box
        style={{
          marginTop: '3rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',

          backgroundColor: '#fff8e1',
          padding: '2rem',
          borderRadius: '8px',
        }}
      >
        <Container>
        <Typography variant="h4" style={{ fontWeight: 'bold', justifyContent: 'center', textAlign: 'center'}} gutterBottom>
          Why Choose BestProfessorAI?
        </Typography>
        <Typography variant="body1" paragraph textAlign={'center'}>
          Our platform combines state-of-the-art AI technology with real student feedback to give you the most accurate and insightful professor reviews available. Whether you&apos;re planning your next semester or just curious about a specific professor, BestProfessorAI is your go-to resource for making informed academic decisions.
        </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0a1929', color: '#fff', padding: '2rem 0' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Simple. Consistent. Useful.
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: '600px', margin: '0 auto' }}>
            We&apos;re here to improve your academic experience with an AI-powered platform for professor reviews. Our chatbot makes it easy to share and discover feedback, helping you make informed decisions and enhance your learning journey.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" sx={{ margin: '0 0.5rem' }} href = '/contact'>
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
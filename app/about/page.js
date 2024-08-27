'use client';

import { useRouter } from 'next/navigation';
import {
  Container, Typography, Button, Box, AppBar, Toolbar, Link, IconButton, Grid, Divider,
} from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function About() {
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
      <Container sx={{ marginTop: '4rem', textAlign: 'center', paddingBottom: '4rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
          About Us
        </Typography>

        {/* Mission Section */}
        <Box sx={{ marginBottom: '3rem' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <EmojiObjectsIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paddingLeft={7} paddingRight={7}>
                At BestProfessorAI, our mission is to empower students by providing an AI-powered platform where
                they can easily share and discover feedback about professors. We believe that informed decisions
                are the key to a successful academic journey, and we are here to help you every step of the way.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ marginBottom: '3rem' }} />

        {/* Team Section */}
        <Box sx={{ marginBottom: '3rem' }}>
          <Grid container spacing={3} alignItems="center" justifyContent="flex-end">
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Meet the Team
              </Typography>
              <Typography variant="body1" paddingLeft={7} paddingRight={7}>
                We are a diverse team of educators, technologists, and AI enthusiasts who are passionate about
                improving the academic experience for students worldwide. Our goal is to make professor reviews
                more accessible and meaningful through the power of artificial intelligence.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <GroupIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ marginBottom: '3rem' }} />

        {/* Why Choose Us Section */}
        <Box sx={{ marginBottom: '3rem' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <VerifiedUserIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" paddingLeft={7} paddingRight={7}>
                BestProfessorAI is committed to providing accurate and unbiased reviews, ensuring that you have all the
                information you need to make the best choices for your education. Join our community and take control of
                your academic success today!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0a1929', color: '#fff', padding: '2rem 0' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Simple. Consistent. Useful.
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: '600px', margin: '0 auto' }}>
            We’re here to improve your academic experience with an AI-powered platform for professor reviews. Our chatbot
            makes it easy to share and discover feedback, helping you make informed decisions and enhance your learning
            journey.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" sx={{ margin: '0 0.5rem' }} href="/contact">
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
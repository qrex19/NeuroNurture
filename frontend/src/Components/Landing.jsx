import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Card, CardContent, Grid, Divider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import logo from './logo.jpg'

const testimonials = [
    { text: "NeuroNurture has completely transformed my learning experience. Highly recommend!", author: "Alice Johnson" },
    { text: "The focus tools and resources are unparalleled. It's like having a personal tutor.", author: "John Doe" },
    { text: "The visual aids are incredible. My understanding of complex concepts has greatly improved.", author: "Emily Smith" },
  ];
  
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatically change slides
    autoplaySpeed: 3000, // Delay between slide changes (in milliseconds)
    arrows: true, // Show navigation arrows
    appendArrows: document.querySelector('.slick-dots'), // Place arrows in a custom position if needed
  };

const Landing = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
       <AppBar position="fixed" sx={{ backgroundColor: '#6F8FAF' }}>
    <Toolbar>
      {/* Logo */}
      <Box
        component="img"
        src={logo}// Replace with your image URL
        alt="Logo"
        sx={{ width: 50, height: 50 }}
      />

      {/* Navigation and Action Buttons */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button color="inherit" sx={{ textTransform: 'none', fontSize: 16, mr: 4 }}>
          NeuroNurture
        </Button>
        <Button color="inherit">Material</Button>
        <Button color="inherit">Quizzes</Button>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button color="inherit">Sign Out</Button>
        </Box>
      </Box>

      {/* Account Circle Icon */}
      <IconButton color="inherit">
        <AccountCircle sx={{ fontSize: 40 }} />
      </IconButton>
    </Toolbar>
  </AppBar>
      <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    {/* Main Content */}
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 7,
        textAlign: 'center',
      }}
    >
      <Container>
        {/* Heading and Catchy Line */}
        <Typography variant="h6" color="textSecondary" sx={{ mt: -10, mb:10 }}>
          {/* Unlock Your Potential with Innovative Learning Solutions */}
          Ignite Your Learning Journey with NeuroNurture - Empowering Minds, One Insight at a Time.
        </Typography>

        {/* Interactive Options */}
        <Box sx={{ mt: 10 }}>
  <Grid container spacing={4} justifyContent="center">
    {['Reading', 'Focus', 'Visual'].map((option) => (
      <Grid item xs={12} sm={4} key={option}>
        <Card
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: '16px',
            cursor: 'pointer',
            '&:hover': { boxShadow: 6 },
            height: 300, // Adjust the height as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
             bgcolor:'rgb(242,242,242)'
          }}
        >
          <CardContent sx={{ textAlign: 'center'}}>
            <Typography variant="h5" component="div" sx={{mt:-2 }}>
              {option}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" sx={{mt:4 }}>
              Explore our {option.toLowerCase()} tools and resources to enhance your learning experience.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


        {/* Carousel */}
       
      </Container>
    </Box>
  </Box>

      {/* Footer */}
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
    {/* Main content */}
    <Box
      sx={{
        paddingBottom: '60px', // Space for the footer to prevent content from being hidden behind it
      }}
    >
      {/* Add your main content here */}
    </Box>

    {/* Footer */}
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        py: 4,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Divider />
      <Typography variant="body2" color="textSecondary">
        Created by Team Short Circuit
      </Typography>
    </Box>
  </Box>
    </div>
  );
};

export default Landing;

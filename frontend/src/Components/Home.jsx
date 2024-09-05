import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Ensure this file exists and is linked correctly
import logo from "./logo.jpg"; // Ensure this image exists
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    text: "NeuroNurture has completely transformed my learning experience. Highly recommend!",
    author: "Alice Johnson",
  },
  {
    text: "The focus tools and resources are unparalleled. It's like having a personal tutor.",
    author: "John Doe",
  },
  {
    text: "The visual aids are incredible. My understanding of complex concepts has greatly improved.",
    author: "Emily Smith",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#6F8FAF" }}>
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: 50, height: 50 }}
            onClick={() => navigate("/")}
          />
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontSize: 16, mr: 4 }}
              onClick={() => navigate("/")}
            >
              NeuroNurture
            </Button>
            <Button color="inherit">Testimony</Button>
            <Button color="inherit" onClick={() => navigate("/material")}>
              Material
            </Button>
            <Button color="inherit" onClick={() => navigate("/quiz")}>
              Quizzes
            </Button>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
              }}
            >
              <Button color="inherit" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
              <Button color="inherit">Login</Button>
            </Box>
          </Box>
          <IconButton color="inherit" onClick={() => navigate("/profile")}>
            <AccountCircle sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          mt: 10,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 7,
            textAlign: "center",
          }}
        >
          <Container>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 10 }}>
              Unlock Your Potential with Innovative Learning Solutions
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {["Reading", "Focus", "Visual"].map((option) => (
                  <Grid item xs={12} sm={4} key={option}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2,
                        borderRadius: "16px",
                        cursor: "pointer",
                        "&:hover": { boxShadow: 6 },
                        height: 300,
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {option}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Explore our {option.toLowerCase()} tools and resources
                          to enhance your learning experience.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" gutterBottom>
                What Our Clients Say
              </Typography>
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      boxShadow: 3,
                      width: "100%",
                      maxWidth: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      `${testimonial.text}`
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      - {testimonial.author}
                    </Typography>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            py: 4,
            backgroundColor: "#f5f5f5",
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

export default Home;

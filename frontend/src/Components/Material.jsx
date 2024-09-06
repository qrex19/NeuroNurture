import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import {
  Divider,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import logo from "./logo.jpg";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const cardsData = [
  { id: 1, image: "https://via.placeholder.com/150", title: "Card Title 1" },
  { id: 2, image: "https://via.placeholder.com/150", title: "Card Title 2" },
  { id: 3, image: "https://via.placeholder.com/150", title: "Card Title 3" },
  { id: 4, image: "https://via.placeholder.com/150", title: "Card Title 4" },
  { id: 5, image: "https://via.placeholder.com/150", title: "Card Title 5" },
  { id: 6, image: "https://via.placeholder.com/150", title: "Card Title 6" },
];

const Quizes = () => {
  const navigator = useNavigate();
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#6F8FAF" }}>
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            src={logo} // Replace with your image URL
            alt="Logo"
            sx={{ width: 50, height: 50 }}
          />

          {/* Navigation and Action Buttons */}
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontSize: 16, mr: 4 }}
              onClick={() => navigator("/")}
            >
              NeuroNurture
            </Button>
            <Button color="inherit">Material</Button>
            <Button color="inherit" onClick={() => navigator("/quiz")}>
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
              <Button color="inherit">Sign Out</Button>
            </Box>
          </Box>

          {/* Account Circle Icon */}
          <IconButton color="inherit" onClick={() => navigator("/profile")}>
            <AccountCircle sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 15 }}>
        <Grid container spacing={7}>
          {cardsData.map((card) => (
            <Grid item xs={12} sm={8} md={4} key={card.id}>
              <Card
                sx={{
                  width: "100%",
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 170, width: "95%" }}
                  image={logo}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div" noWrap>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {/* Main content */}
        <Box
          sx={{
            paddingBottom: "60px", // Space for the footer to prevent content from being hidden behind it
          }}
        >
          {/* Add your main content here */}
        </Box>

        {/* Footer */}
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

export default Quizes;

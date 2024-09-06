// src/pages/StatisticsPage.js
import { Line, Pie } from "react-chartjs-2";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for Line Chart
const lineChartData = {
  labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5"],
  datasets: [
    {
      label: "Score Percentage",
      data: [70, 85, 90, 65, 80],
      borderColor: "#3f51b5",
      backgroundColor: "rgba(63, 81, 181, 0.3)",
      fill: true,
    },
  ],
};

// Sample data for Pie Chart
const pieChartData = {
  labels: ["Correct", "Incorrect"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#4caf50", "#f44336"],
    },
  ],
};

const Profile = () => {
  const navigator = useNavigate();
  return (
    <>
      <IconButton>
        <KeyboardBackspaceIcon onClick={() => navigator("/")} />
      </IconButton>
      <Typography variant="h2" sx={{ ml: 8 }}>
        PROFILE
      </Typography>
      <Container
        component="main"
        sx={{
          mt: -5,
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={11} md={6}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Quiz Scores Over Time
              </Typography>

              <Line data={lineChartData} options={{ responsive: true }} />
            </Paper>
          </Grid>

          {/* Right Half: Pie Chart + Stats */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ height: "100%" }}>
              {/* Top Half: Pie Chart */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Quiz Results
                  </Typography>
                  <Box sx={{ height: 300 }}>
                    <Pie data={pieChartData} options={{ responsive: true }} />
                  </Box>
                </Paper>
              </Grid>

              {/* Bottom Half: Stats */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Quiz Stats
                  </Typography>
                  <Box>
                    <Typography variant="body1" gutterBottom>
                      <strong>Time Spent:</strong> 45 minutes
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Average Score:</strong> 78%
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Quiz Level:</strong> Intermediate
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;

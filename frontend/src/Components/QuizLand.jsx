import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const QuizLand = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && difficulty) {
      navigate(`/quiz/${category}/${difficulty}`);
    } else {
      alert("Please select both category and difficulty.");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Select Quiz Category and Difficulty
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="social-studies">Social Studies</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="difficulty-label">Difficulty</InputLabel>
            <Select
              labelId="difficulty-label"
              value={difficulty}
              label="Difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained" color="primary" type="submit">
          Start Quiz
        </Button>
      </form>
    </Box>
  );
};

export default QuizLand;

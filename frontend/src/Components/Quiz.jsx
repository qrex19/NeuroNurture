// // import { useState } from "react";
// // import axios from "axios";
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   InputLabel,
// //   MenuItem,
// //   Select,
// //   Typography,
// // } from "@mui/material";

// // const Quiz = () => {
// //   const [category, setCategory] = useState("");
// //   const [difficulty, setDifficulty] = useState("");
// //   const [questions, setQuestions] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedOption, setSelectedOption] = useState("");
// //   const [score, setScore] = useState(0);

// //   const fetchQuestions = () => {
// //     if (category && difficulty) {
// //       axios
// //         .get(`/${category}/quiz`)
// //         .then((response) => {
// //           const data = response.data[difficulty];
// //           setQuestions(data);
// //         })
// //         .catch((error) => console.error("Error fetching quiz data:", error));
// //     } else {
// //       alert("Please select both category and difficulty.");
// //     }
// //   };

// //   const handleOptionChange = (option) => {
// //     setSelectedOption(option);
// //   };

// //   const handleSubmit = () => {
// //     if (selectedOption === questions[currentQuestionIndex]?.answer) {
// //       setScore(score + 1);
// //     }
// //     setSelectedOption("");
// //     setCurrentQuestionIndex(currentQuestionIndex + 1);
// //   };

// //   if (!questions.length) {
// //     return (
// //       <Box sx={{ p: 4 }}>
// //         <Typography variant="h6" sx={{ mb: 2 }}>
// //           Choose Your Category and Difficulty to Start the Quiz
// //         </Typography>

// //         {/* Form to Select Category and Difficulty */}
// //         <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
// //           <FormControl fullWidth>
// //             <InputLabel id="category-label">Category</InputLabel>
// //             <Select
// //               labelId="category-label"
// //               value={category}
// //               label="Category"
// //               onChange={(e) => setCategory(e.target.value)}
// //             >
// //               <MenuItem value="science">Science</MenuItem>
// //               <MenuItem value="social-studies">Social Studies</MenuItem>
// //               <MenuItem value="english">English</MenuItem>
// //             </Select>
// //           </FormControl>

// //           <FormControl fullWidth>
// //             <InputLabel id="difficulty-label">Difficulty</InputLabel>
// //             <Select
// //               labelId="difficulty-label"
// //               value={difficulty}
// //               label="Difficulty"
// //               onChange={(e) => setDifficulty(e.target.value)}
// //             >
// //               <MenuItem value="easy">Easy</MenuItem>
// //               <MenuItem value="medium">Medium</MenuItem>
// //               <MenuItem value="hard">Hard</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </Box>

// //         <Button variant="contained" color="primary" onClick={fetchQuestions}>
// //           Start Quiz
// //         </Button>
// //       </Box>
// //     );
// //   }

// //   if (currentQuestionIndex >= questions.length) {
// //     return (
// //       <Box sx={{ p: 4 }}>
// //         <Typography variant="h6">
// //           Your final score is {score} out of {questions.length}.
// //         </Typography>
// //       </Box>
// //     );
// //   }

// //   const currentQuestion = questions[currentQuestionIndex];

// //   return (
// //     <Box sx={{ p: 4 }}>
// //       <Typography variant="h6">
// //         {category.toUpperCase()} Quiz - {difficulty.toUpperCase()}
// //       </Typography>
// //       <Box sx={{ mt: 4 }}>
// //         <Typography variant="body1" sx={{ mb: 2 }}>
// //           <strong>{currentQuestion?.question}</strong>
// //         </Typography>
// //         <ul>
// //           {currentQuestion?.options.map((option, index) => (
// //             <li key={index}>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   name="quiz-option"
// //                   value={option}
// //                   checked={selectedOption === option}
// //                   onChange={() => handleOptionChange(option)}
// //                 />
// //                 {option}
// //               </label>
// //             </li>
// //           ))}
// //         </ul>
// //         <Button variant="contained" color="primary" onClick={handleSubmit}>
// //           Next
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Quiz;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Box, Button, Typography } from "@mui/material";

// const Quiz = () => {
//   const { category, difficulty } = useParams(); // Get category and difficulty from params
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     if (category && difficulty) {
//       axios
//         .get(`/${category}/quiz`)
//         .then((response) => {
//           const data = response.data[difficulty];
//           setQuestions(data);
//         })
//         .catch((error) => console.error("Error fetching quiz data:", error));
//     }
//   }, [category, difficulty]); // Fetch questions when category or difficulty changes

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//     if (selectedOption === questions[currentQuestionIndex]?.answer) {
//       setScore(score + 1);
//     }
//     setSelectedOption("");
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   if (questions.length === 0) {
//     return <Box sx={{ p: 4 }}>Loading questions...</Box>;
//   }

//   if (currentQuestionIndex >= questions.length) {
//     return (
//       <Box sx={{ p: 4 }}>
//         <Typography variant="h6">
//           Your final score is {score} out of {questions.length}.
//         </Typography>
//       </Box>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h6">
//         {category.toUpperCase()} Quiz - {difficulty.toUpperCase()}
//       </Typography>
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           <strong>{currentQuestion?.question}</strong>
//         </Typography>
//         <ul>
//           {currentQuestion?.options.map((option, index) => (
//             <li key={index}>
//               <label>
//                 <input
//                   type="radio"
//                   name="quiz-option"
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={() => handleOptionChange(option)}
//                 />
//                 {option}
//               </label>
//             </li>
//           ))}
//         </ul>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Quiz;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const Quiz = () => {
  const { category, difficulty } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (category && difficulty) {
      axios
        .get(`/${category}/quiz`, { params: { difficulty } })
        .then((response) => {
          const data = response.data[difficulty];
          setQuestions(data);
        })
        .catch((error) => console.error("Error fetching quiz data:", error));
    }
  }, [category, difficulty]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex]?.answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleSkip = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">
          Your final score is {score} out of {questions.length}.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Exit
        </Button>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Question {currentQuestionIndex + 1}: {currentQuestion?.question}
      </Typography>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        {currentQuestion?.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ mr: 1 }}
        >
          Next
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleSkip}
          sx={{ mr: 1 }}
        >
          Skip
        </Button>
        <Button variant="outlined" color="default" onClick={handleExit}>
          Exit
        </Button>
      </Box>
    </Box>
  );
};

export default Quiz;

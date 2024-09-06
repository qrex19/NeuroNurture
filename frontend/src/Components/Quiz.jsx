// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Typography,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";

// const Quiz = () => {
//   const { category, difficulty } = useParams();
//   const navigate = useNavigate();

//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     if (category && difficulty) {
//       console.log("code reached here");
//       axios
//         .get(`/${category}/quiz`)
//         .then((response) => {
//           const data = response.data[difficulty];
//           console.log(data);
//           setQuestions(data);
//         })
//         .catch((error) => console.error("Error fetching quiz data:", error));
//     }
//   }, [category, difficulty]);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleNext = () => {
//     if (selectedOption === questions[currentQuestionIndex]?.answer) {
//       setScore(score + 1);
//     }
//     setSelectedOption("");
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handleExit = () => {
//     navigate("/");
//   };

//   const handleSkip = () => {
//     setSelectedOption("");
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   if (questions.length === 0) {
//     return <div>Loading...</div>;
//   }

//   if (currentQuestionIndex >= questions.length) {
//     return (
//       <Box sx={{ p: 4 }}>
//         <Typography variant="h6">
//           Your final score is {score} out of {questions.length}.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate("/")}
//         >
//           Exit
//         </Button>
//       </Box>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" sx={{ mb: 2 }}>
//         Question {currentQuestionIndex + 1}: {currentQuestion?.question}
//       </Typography>
//       <RadioGroup value={selectedOption} onChange={handleOptionChange}>
//         {currentQuestion?.options.map((option, index) => (
//           <FormControlLabel
//             key={index}
//             value={option}
//             control={<Radio />}
//             label={option}
//           />
//         ))}
//       </RadioGroup>
//       <Box sx={{ mt: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleNext}
//           sx={{ mr: 1 }}
//         >
//           Next
//         </Button>
//         <Button
//           variant="outlined"
//           color="secondary"
//           onClick={handleSkip}
//           sx={{ mr: 1 }}
//         >
//           Skip
//         </Button>
//         <Button variant="outlined" color="default" onClick={handleExit}>
//           Exit
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
    axios
      .get(`http://localhost:3000/${category}/quiz`)
      .then((response) => {
        console.log("code has response");
        console.log(response.data[`${difficulty}`]);
        // Adjusting the response to fit the provided format
        const difficultyKey = `${difficulty}_quiz`;
        const data = response.data[difficultyKey];
        if (data && data.length > 0) {
          setQuestions(data);
        } else {
          console.error(
            "No quiz data available for the selected category and difficulty"
          );
        }
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
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

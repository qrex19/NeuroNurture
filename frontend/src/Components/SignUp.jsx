// // src/Signup.js
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { auth, db } from "../../firebase/firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { useState } from "react";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { useNavigate } from "react-router-dom";

// // Create a theme instance
// const theme = createTheme();

// const Signup = () => {
//   const navigator = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       // Create a new user with Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Define the document ID and fields
//       const userDocId = user.uid; // Use the user's UID as the document ID
//       const userDocFields = {
//         email: user.email,
//         createdAt: new Date(), // Store the current timestamp
//         displayName: "", // Initialize as an empty string (can be updated later)
//         photoURL: "", // Initialize as an empty string (can be updated later)
//       };

//       // Create or update the user document in Firestore
//       await setDoc(doc(db, "users", userDocId), userDocFields);

//       setSuccess("User registered and added to Firestore successfully!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <IconButton onClick={() => navigator("/")}>
//         <KeyboardBackspaceIcon />
//       </IconButton>

//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           <Paper
//             elevation={3}
//             sx={{
//               padding: 3,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="h5">Sign Up</Typography>
//             <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               {error && (
//                 <Typography color="error" variant="body2" sx={{ mb: 2 }}>
//                   {error}
//                 </Typography>
//               )}
//               {success && (
//                 <Typography color="success" variant="body2" sx={{ mb: 2 }}>
//                   {success}
//                 </Typography>
//               )}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           </Paper>
//         </Container>
//       </ThemeProvider>
//     </>
//   );
// };

// export default Signup;

// src/Signup.js

// src/Signup.js

// src/Signup.js
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { db } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

// Create a theme instance
const theme = createTheme();

const Signup = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Define the document ID and fields
      const userDocId = Date.now().toString(); // Use a unique identifier or generate one
      const userDocFields = {
        email,
        displayName,
        createdAt: new Date(), // Store the current timestamp
      };

      // Create or update the user document in Firestore
      await setDoc(doc(db, "users", userDocId), userDocFields);

      setSuccess("User data stored successfully!");
    } catch (err) {
      setError("Error storing user data: " + err.message);
    }
  };

  return (
    <>
      <IconButton onClick={() => navigator("/")}>
        <KeyboardBackspaceIcon />
      </IconButton>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Sign Up</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                sx={{ mb: 2 }}
              />
              {error && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography color="success" variant="body2" sx={{ mb: 2 }}>
                  {success}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Signup;

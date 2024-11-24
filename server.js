const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// API route 1: Midterm & Raw Finals Grade Calculation
app.post('/calculate-final-grade', (req, res) => {
  const { midtermGrade, finalGrade } = req.body;

  // Validate input
  if (typeof midtermGrade !== 'number' || typeof finalGrade !== 'number') {
    return res.status(400).json({ error: 'Both midterm and final grades must be numbers' });
  }

  // Calculate final grade (1/3 of midterm + 2/3 of final exam)
  const finalGradeResult = (midtermGrade * 1/3) + (finalGrade * 2/3);

  // Send the final grade as a response
  res.json({ finalGrade: finalGradeResult });
});

// API route 2: Raw Grade Calculation (Class Participation, Quizzes, Final Exam)
app.post('/calculate-raw-grade', (req, res) => {
  const { participation, quizzes, finalExam } = req.body;

  // Validate input
  if (typeof participation !== 'number' || typeof quizzes !== 'number' || typeof finalExam !== 'number') {
    return res.status(400).json({ error: 'All values must be numbers' });
  }

  // Calculate raw grade (1/3 participation + 1/3 quizzes + 1/3 final exam)
  const rawGrade = (participation * 1/3) + (quizzes * 1/3) + (finalExam * 1/3);

  // Send the raw grade as a response
  res.json({ rawGrade });
});

// API route 3: Lec and Lab Grade Calculation (Lec: 60%, Lab: 40%)
app.post('/calculate-lec-lab-grade', (req, res) => {
  const { lecGrade, labGrade } = req.body;

  // Validate input
  if (typeof lecGrade !== 'number' || typeof labGrade !== 'number') {
    return res.status(400).json({ error: 'Both Lec and Lab grades must be numbers' });
  }
  // Calculate final grade (Lec: 60%, Lab: 40%)
  const finalGradeLecLab = (lecGrade * 0.6) + (labGrade * 0.4);

  // Send the final grade as a response
  res.json({ finalGrade: finalGradeLecLab });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

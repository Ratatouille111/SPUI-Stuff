module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { midtermGrade, finalGrade } = req.body;

    // Validate input
    if (typeof midtermGrade !== 'number' || typeof finalGrade !== 'number') {
      return res.status(400).json({ error: 'Both midterm and final grades must be numbers' });
    }

    // Calculate final grade (1/3 of midterm + 2/3 of final exam)
    const finalGradeResult = (midtermGrade * 1 / 3) + (finalGrade * 2 / 3);

    // Send the final grade as a response
    return res.status(200).json({ finalGrade: finalGradeResult });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

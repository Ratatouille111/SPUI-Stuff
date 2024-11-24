module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { lecGrade, labGrade } = req.body;

    // Validate input
    if (typeof lecGrade !== 'number' || typeof labGrade !== 'number') {
      return res.status(400).json({ error: 'Both Lec and Lab grades must be numbers' });
    }

    // Calculate final grade (Lec: 60%, Lab: 40%)
    const finalGradeLecLab = (lecGrade * 0.6) + (labGrade * 0.4);

    // Send the final grade as a response
    return res.status(200).json({ finalGrade: finalGradeLecLab });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

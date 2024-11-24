module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { participation, quizzes, finalExam } = req.body;

    // Validate input
    if (typeof participation !== 'number' || typeof quizzes !== 'number' || typeof finalExam !== 'number') {
      return res.status(400).json({ error: 'All values must be numbers' });
    }

    // Calculate raw grade (1/3 participation + 1/3 quizzes + 1/3 final exam)
    const rawGrade = (participation * 1 / 3) + (quizzes * 1 / 3) + (finalExam * 1 / 3);

    // Send the raw grade as a response
    return res.status(200).json({ rawGrade });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { participation, quizzes, finalExam } = req.body;

    if (typeof participation !== 'number' || typeof quizzes !== 'number' || typeof finalExam !== 'number') {
      return res.status(400).json({ error: 'All grades must be numbers' });
    }

    const rawGrade = (participation * 1 / 3) + (quizzes * 1 / 3) + (finalExam * 1 / 3);
    return res.status(200).json({ rawGrade });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

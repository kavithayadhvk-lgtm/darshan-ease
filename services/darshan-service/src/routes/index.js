const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to darshan-service' });
});

module.exports = router;

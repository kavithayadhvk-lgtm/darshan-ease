const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to ticket-service' });
});

module.exports = router;

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to api-gateway' });
});

module.exports = router;

const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log('temple-service running on port ' + PORT);
});

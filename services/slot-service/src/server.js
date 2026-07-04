const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log('slot-service running on port ' + PORT);
});

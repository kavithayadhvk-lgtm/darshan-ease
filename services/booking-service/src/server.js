const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log('booking-service running on port ' + PORT);
});

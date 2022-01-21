const express = require('express');
import router from './routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use('', router);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

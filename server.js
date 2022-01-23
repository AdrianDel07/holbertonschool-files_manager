import express from 'express';
import Routers from './routes';

const PORT = process.env.PORT || 5000;

const app = express();

Routers(app);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

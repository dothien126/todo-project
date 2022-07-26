import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import connectToDb from './configs/db.connect';
import router from './router';

const app = express();

app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.use(router);

const PORT = 3003;
app.get('/', (_, res) => {
  res.send('Hello');
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  connectToDb();
});

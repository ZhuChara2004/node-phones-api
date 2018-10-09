import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import appRouter from './routes/appRouter';

// mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
mongoose.connect('mongodb://localhost:27017/node-api-1');
const db = mongoose.connection;

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

appRouter(app);

const server = app.listen(3000, () => {
  console.log("app running on port", server.address().port);
});

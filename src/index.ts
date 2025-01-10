import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from '@/database';
import UserRoute from '@/routes/users'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});


app.use(UserRoute);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

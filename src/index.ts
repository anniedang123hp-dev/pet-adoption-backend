import express, { Request, Response } from 'express';
// import cors from 'cors';
import deviceRouter from './routes/example';

const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5173' })); // allow React frontend to access API

// Routes
app.use('/devices', deviceRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

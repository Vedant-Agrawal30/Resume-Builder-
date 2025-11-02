import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// DB connection
await connectDB();

app.use(express.json());
app.use(cors());

const _dirname = path.resolve();

// app.get('/', (req, res) => res.send("Server is Live...."));

app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/ai', aiRouter);

// Serve frontend
app.use(express.static(path.join(_dirname, "client/dist")));

// ✅ FIX: fallback for React Router (Express 5+ safe)
app.use((_, res) => {
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

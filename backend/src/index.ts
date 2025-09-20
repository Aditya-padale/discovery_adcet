import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { registerUser } from './register';
import { checkDuplicate } from './search';
import { orderRazorpay } from './utils/razorpay';
import { verifyPayment } from './utils/payment-verification';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check route
app.get('/', (req, res) => {
  res.send('Discovery ADCET Backend Server is running!');
});

// API Routes
app.post('/api/register', checkDuplicate, verifyPayment, registerUser);
app.post('/api/order', orderRazorpay);
app.post('/api/payment-verification', verifyPayment);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {   
  console.log(`Discovery ADCET Backend Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
});

export default app;
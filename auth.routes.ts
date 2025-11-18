import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  // Implement login logic
  res.json({ token: 'mock-jwt-token', user: { id: '1', username: 'User' } });
});

router.post('/register', (req, res) => {
  // Implement register logic
  res.json({ message: 'User registered' });
});

export default router;

import { Router } from 'express';

const router = Router();

router.get('/:chatId', (req, res) => {
  // Get messages for chat
  res.json([]);
});

router.post('/:chatId', (req, res) => {
  // Send message
  res.json({ id: 'new-message-id' });
});

export default router;
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  // Get all chats for user
  res.json([]);
});

router.post('/', (req, res) => {
  // Create new chat
  res.json({ id: 'new-chat-id' });
});

export default router;
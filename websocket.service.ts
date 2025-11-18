import { WebSocketServer, WebSocket } from 'ws';
import jwt from 'jsonwebtoken';

interface ExtWebSocket extends WebSocket {
  userId?: string;
  isAlive: boolean;
}

export const setupWebSocket = (wss: WebSocketServer) => {
  wss.on('connection', (ws: ExtWebSocket, req) => {
    ws.isAlive = true;

    // Extract token from query string or headers (simplified)
    // In production, parse req.url for ?token=...
    
    ws.on('pong', () => {
      ws.isAlive = true;
    });

    ws.on('message', (data: string) => {
      try {
        const message = JSON.parse(data);
        handleMessage(ws, message, wss);
      } catch (error) {
        console.error('Invalid message format');
      }
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  // Heartbeat
  const interval = setInterval(() => {
    wss.clients.forEach((ws: any) => {
      if (ws.isAlive === false) return ws.terminate();
      ws.isAlive = false;
      ws.ping();
    });
  }, 30000);

  wss.on('close', () => {
    clearInterval(interval);
  });
};

const handleMessage = (ws: ExtWebSocket, message: any, wss: WebSocketServer) => {
  switch (message.type) {
    case 'AUTH':
      // Verify token and set ws.userId
      break;
    case 'SEND_MESSAGE':
      // Broadcast to specific chat members
      broadcastToChat(message.chatId, message.payload, wss);
      break;
    case 'TYPING':
      broadcastToChat(message.chatId, { type: 'TYPING', userId: ws.userId }, wss);
      break;
    default:
      break;
  }
};

const broadcastToChat = (chatId: string, payload: any, wss: WebSocketServer) => {
  // In a real app, you'd look up which connected clients are in this chatId
  // For now, we broadcast to everyone for demo purposes
  wss.clients.forEach((client: any) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ chatId, ...payload }));
    }
  });
};
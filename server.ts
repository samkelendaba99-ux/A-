export interface User {
  id: string;
  name: string;
  avatar: string;
  status: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
  type: 'text' | 'image' | 'voice' | 'video';
  status: 'sent' | 'delivered' | 'read';
  reactions?: string[];
  mediaUrl?: string;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isGroup: boolean;
  participants: User[];
  messages: Message[];
}

export const CURRENT_USER: User = {
  id: 'me',
  name: 'You',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  status: 'Available',
  isOnline: true,
};

export const USERS: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    status: 'At the gym 🏋️‍♀️',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Bob Smith',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    status: 'Busy working',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    status: 'Sleeping 😴',
    isOnline: false,
  },
];

export const MOCK_CHATS: Chat[] = [
  {
    id: 'c1',
    name: 'Alice Johnson',
    avatar: USERS[0].avatar,
    lastMessage: 'See you at 5!',
    lastMessageTime: '10:30 AM',
    unreadCount: 2,
    isGroup: false,
    participants: [CURRENT_USER, USERS[0]],
    messages: [
      {
        id: 'm1',
        text: 'Hey Alice! Are we still on for today?',
        senderId: 'me',
        timestamp: '10:00 AM',
        type: 'text',
        status: 'read',
      },
      {
        id: 'm2',
        text: 'Yes! Absolutely.',
        senderId: '1',
        timestamp: '10:05 AM',
        type: 'text',
        status: 'read',
      },
      {
        id: 'm3',
        text: 'See you at 5!',
        senderId: '1',
        timestamp: '10:30 AM',
        type: 'text',
        status: 'read',
      },
    ],
  },
  {
    id: 'c2',
    name: 'Tech Talk 🚀',
    avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
    lastMessage: 'Bob: Did you check the new API?',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    isGroup: true,
    participants: [CURRENT_USER, USERS[0], USERS[1]],
    messages: [
      {
        id: 'm1',
        text: 'Did you check the new API?',
        senderId: '2',
        timestamp: 'Yesterday',
        type: 'text',
        status: 'read',
      },
    ],
  },
];

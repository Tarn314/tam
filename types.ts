export type Language = 'en' | 'vi';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  imageUrl: string;
  amenities: string[];
}

export interface RoomData {
  id: string;
  nameEn: string;
  nameVi: string;
  descEn: string;
  descVi: string;
  price: number;
  capacity: number;
  imageUrl: string;
  amenitiesEn: string[];
  amenitiesVi: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
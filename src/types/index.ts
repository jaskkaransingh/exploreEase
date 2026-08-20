export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  type: "attraction" | "hotel" | "restaurant";
  location: string;
  coordinates: Coordinates;
  rating: number;
  priceLevel?: "$" | "$$" | "$$$" | "$$$$";
  imageUrl: string;
  description: string;
  tags: string[];
}

export interface ItineraryItem {
  id: string;
  title: string;
  type: Place["type"] | "transit" | "custom";
  location: string;
  startTime: string; // ISO string or simple time like "10:30 AM"
  duration: string;
  estimatedCost: number; // in INR
  distanceFromPrevious?: string;
  transportMode?: "walk" | "car" | "transit";
  description?: string;
  image?: string;
  coordinates?: Coordinates;
}

export interface TripDay {
  id: string;
  date: string;
  items: ItineraryItem[];
}

export interface Trip {
  id: string;
  userId: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: number;
  interests: string[];
  totalEstimatedCost: number;
  days: TripDay[];
  createdAt: string;
  updatedAt: string;
}

import type { Trip } from "../types";

export const MOCK_TRIP: Trip = {
  id: "trip_001",
  userId: "user_123",
  destination: "Manali",
  startDate: "2024-09-12",
  endDate: "2024-09-16",
  travelers: 2,
  budget: 35000,
  interests: ["Nature", "Adventure", "Culture"],
  totalEstimatedCost: 26400,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  days: [
    {
      id: "day_1",
      date: "2024-09-12",
      items: [
        {
          id: "item_1",
          title: "Arrive in Manali & Check-in",
          type: "hotel",
          location: "Old Manali",
          startTime: "11:00 AM",
          duration: "1h",
          estimatedCost: 3500,
          description: "Check into the boutique resort and freshen up.",
        },
        {
          id: "item_2",
          title: "Hadimba Temple",
          type: "attraction",
          location: "Dhungri Village",
          startTime: "01:00 PM",
          duration: "1h 15m",
          estimatedCost: 30,
          distanceFromPrevious: "12 min",
          transportMode: "car",
          description: "Explore the ancient wooden temple surrounded by cedar forests.",
          image: "https://images.unsplash.com/photo-1626014903706-e7e61bc8481d?q=80&w=2940&auto=format&fit=crop",
        },
        {
          id: "item_3",
          title: "Cafe 1947",
          type: "restaurant",
          location: "Old Manali",
          startTime: "02:30 PM",
          duration: "1h 30m",
          estimatedCost: 1200,
          distanceFromPrevious: "15 min",
          transportMode: "walk",
          description: "Late lunch by the river with live music.",
        }
      ]
    },
    {
      id: "day_2",
      date: "2024-09-13",
      items: [
        {
          id: "item_4",
          title: "Solang Valley",
          type: "attraction",
          location: "Solang",
          startTime: "09:00 AM",
          duration: "4h",
          estimatedCost: 2500,
          description: "Adventure activities including paragliding and zorbing.",
        }
      ]
    }
  ]
};

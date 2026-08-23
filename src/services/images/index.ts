// Image Provider Abstraction (Unsplash)
// Fetches high-quality editorial photography for destinations.

export const getDestinationImage = async (query: string): Promise<string> => {
  // Real implementation will call Unsplash API
  // Mocking based on query for now
  if (query.toLowerCase().includes('manali')) {
    return "https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2940&auto=format&fit=crop";
  }
  return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop";
};

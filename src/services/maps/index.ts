// Google Maps Abstraction
// Handles map initialization, markers, and generic map interactions.

export interface Location {
  lat: number;
  lng: number;
}

export const initMap = async (elementId: string, center: Location) => {
  console.log(`Map initialized at ${elementId} with center`, center);
  // Real implementation will load Google Maps JS API
};

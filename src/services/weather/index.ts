// Weather API Abstraction (OpenWeather)
// This service translates raw weather data into human-readable travel context.

export interface WeatherContext {
  temp: number;
  condition: string;
  rainProbability: number;
  recommendation: string;
}

export const getDestinationWeather = async (_destinationId: string): Promise<WeatherContext> => {
  // Mock data for immediate UI build
  return {
    temp: 23,
    condition: 'Clear Skies',
    rainProbability: 20,
    recommendation: 'Good conditions for outdoor exploration in the morning.'
  };
};

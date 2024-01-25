export type CurrentForecastResponse = {
  main: MainData;
  name: string;
  weather: Conditions[];
  wind: Wind;
};

export type MainData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Conditions = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type City = {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type Coordinates = {
  lon: string;
  lat: string;
};

export type Location = {
  city: string;
  coord: Coordinates;
};

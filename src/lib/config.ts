import { Location } from './types';

export const DEFAULT_UNIT = 'metric';
export const INITIAL_VALUES = {
  main: {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
  },
  weather: [{ main: '', icon: '' }],
  name: '',
  wind: { speed: 0, deg: 0 },
};
export const DEFAULT_LOCATION: Location = {
  city: 'Londrina',
  coord: {
    lat: '-23.3045',
    lon: '-51.1696',
  },
};
export const DEFAULT_SEARCH_LIMIT = 5;

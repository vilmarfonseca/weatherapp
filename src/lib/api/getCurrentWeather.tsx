export const getCurrentWeather = async ({
  lat,
  lon,
  units,
}: {
  lat: string;
  lon: string;
  units: string;
}) => {
  const data = await fetch(
    `http://localhost:3000/api/weather/?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );
  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
};

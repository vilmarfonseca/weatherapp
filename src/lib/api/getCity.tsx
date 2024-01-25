export const getCity = async ({ q }: { q: string }) => {
  const data = await fetch(
    `http://localhost:3000/api/search/?q=${q}&limit=10&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );
  if (!data.ok) {
    throw new Error('Failed to fetch city data');
  }

  return data.json();
};

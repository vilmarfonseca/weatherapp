export const getCity = async ({ q }: { q: string }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/search/?q=${q}&limit=10&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );
  if (!data.ok) {
    throw new Error('Failed to fetch city data');
  }

  return data.json();
};

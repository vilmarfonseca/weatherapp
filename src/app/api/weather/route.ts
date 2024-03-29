export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const units = searchParams.get('units') || 'metric';
  const appid = searchParams.get('appid');

  if (!appid) {
    return new Response(
      JSON.stringify({
        message: 'OpenWeather API key not found in environment variables',
      }),
      { status: 401 }
    );
  }
  if (!lat || !lon) {
    return new Response(JSON.stringify({ message: 'Missing parameters' }), {
      status: 400,
    });
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${appid}`,
    {
      next: { revalidate: 900 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await res.json();

  return new Response(JSON.stringify(data));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const limit = searchParams.get('limit');
  const appid = searchParams.get('appid');

  if (!appid) {
    return new Response(
      JSON.stringify({
        message: 'OpenWeather API key not found in environment variables',
      }),
      { status: 401 }
    );
  }
  if (!q || !limit) {
    return new Response(JSON.stringify({ message: 'Missing parameters' }), {
      status: 400,
    });
  }

  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appid=${appid}`,
    {
      next: { revalidate: 900 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch city data');
  }

  const data = await res.json();

  return new Response(JSON.stringify(data));
}

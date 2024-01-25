import { notFound } from 'next/navigation';

import { getCurrentWeather } from '@/lib/api/getCurrentWeather';
import { DEFAULT_LOCATION } from '@/lib/config';
import { CurrentForecastResponse } from '@/lib/types';

import { SearchDialog } from '@/components/SearchDialog';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Humidity from '@/components/widgets/Humidity';
import Wind from '@/components/widgets/Wind';

export default async function HomePage() {
  const { lat, lon } = DEFAULT_LOCATION.coord;
  const units = 'metric';

  const CurrentForecastRequest: CurrentForecastResponse =
    await getCurrentWeather({
      lat,
      lon,
      units: units,
    });

  const [currentWeatherData] = await Promise.resolve([CurrentForecastRequest]);

  if (!currentWeatherData) return notFound();

  const { main, weather, name: cityName, wind } = currentWeatherData;

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex flex-col min-h-screen items-center justify-center py-12 text-center gap-5'>
          <div className='flex justify-center gap-10 w-full'>
            {/* <ToggleUnits /> */}
            <SearchDialog />
          </div>
          <div className='flex gap-6'>
            <Humidity value={main.humidity} />
            <CurrentWeather
              city={cityName}
              conditions={weather}
              mainData={main}
            />
            <Wind data={wind} />
          </div>
        </div>
      </section>
    </main>
  );
}

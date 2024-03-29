'use client';

import { useEffect, useState } from 'react';

import { getCurrentWeather } from '@/lib/api/getCurrentWeather';
import { DEFAULT_LOCATION, DEFAULT_UNIT, INITIAL_VALUES } from '@/lib/config';
import { CurrentForecastResponse } from '@/lib/types';

import { SearchDialog } from '@/components/SearchDialog';
import { ModeToggle } from '@/components/ui/ModeToggle';
import ToggleUnits from '@/components/ui/ToggleUnits';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Humidity from '@/components/widgets/Humidity';
import Wind from '@/components/widgets/Wind';

interface searchParamsProps {
  units: string;
  lat: string;
  lon: string;
}

export default function HomePage({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
  const { lat, lon } = DEFAULT_LOCATION.coord;
  const [loading, setLoading] = useState(true);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentForecastResponse>(INITIAL_VALUES);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      const CurrentForecastRequest = await getCurrentWeather({
        lat: searchParams.lat || lat,
        lon: searchParams.lon || lon,
        units: searchParams.units || DEFAULT_UNIT,
      });

      await Promise.resolve([CurrentForecastRequest]).then((data) => {
        setCurrentWeatherData(data[0]);
        setLoading(false);
      });
    };

    fetchWeatherData();
  }, [lat, lon, searchParams]);

  const { main, weather, name: cityName, wind } = currentWeatherData;

  return (
    <main>
      <section>
        <div className='layout relative max-w-screen-sm mx-auto flex flex-col min-h-screen items-center justify-center py-12 text-center gap-8 sm:gap-5'>
          <div className='flex justify-between px-10 sm:px-8 gap-4 sm:gap-6 w-full'>
            <SearchDialog />
            <div className='flex gap-4 sm:gap-6 flex-row-reverse sm:flex-row'>
              <ToggleUnits />
              <ModeToggle />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-6'>
            <CurrentWeather
              city={cityName}
              conditions={weather}
              mainData={main}
              loading={loading}
            />
            <div className='flex flex-col gap-5'>
              <Humidity value={main.humidity} loading={loading} />
              <Wind
                data={wind}
                unit={searchParams.units || DEFAULT_UNIT}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

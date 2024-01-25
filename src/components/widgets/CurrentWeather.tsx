import { Conditions, MainData } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';
import WeatherIcon from '@/components/WeatherIcon';

interface CurrentWeatherProps {
  city: string;
  conditions: Conditions[];
  mainData: MainData;
  loading: boolean;
}

export default function CurrentWeather({
  city,
  conditions,
  mainData,
  loading,
}: CurrentWeatherProps) {
  return (
    <Card className='px-10'>
      <CardHeader>
        {loading ? (
          <Skeleton className='flex w-full h-16 mb-2' />
        ) : (
          <>
            <CardTitle>{city}</CardTitle>
            <CardDescription>My Location</CardDescription>
          </>
        )}
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className='flex w-full h-32 mb-2' />
        ) : (
          <div className='flex justify-center text-8xl font-bold w-10 mx-auto'>
            {Math.round(mainData.temp)}&deg;
          </div>
        )}
        {loading ? (
          <Skeleton className='flex w-full h-4 mt-2' />
        ) : (
          <p>
            H:{Math.round(mainData.temp_max)}&deg; L:
            {Math.round(mainData.temp_min)}&deg;
          </p>
        )}
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        {loading ? (
          <Skeleton className='flex h-32 mt-10 w-36' />
        ) : (
          <>
            <WeatherIcon icon={conditions[0].icon} />
            <p>{conditions[0].main}</p>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

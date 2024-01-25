import { Conditions, MainData } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import WeatherIcon from '@/components/WeatherIcon';

interface CurrentWeatherProps {
  city: string;
  conditions: Conditions[];
  mainData: MainData;
}

export default function CurrentWeather({
  city,
  conditions,
  mainData,
}: CurrentWeatherProps) {
  return (
    <Card className='px-10'>
      <CardHeader>
        <CardTitle>{city}</CardTitle>
        <CardDescription>My Location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold w-10 mx-auto'>
          {Math.round(mainData.temp)}&deg;
        </div>
        <p>
          H:{Math.round(mainData.temp_max)}&deg; L:
          {Math.round(mainData.temp_min)}&deg;
        </p>
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        <WeatherIcon icon={conditions[0].icon} />
        <p>{conditions[0].main}</p>
      </CardFooter>
    </Card>
  );
}

import { Conditions, MainData } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

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
    <Card className='px-5'>
      <CardHeader>
        <CardTitle>{city}</CardTitle>
        <CardDescription>My Location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          {Math.round(mainData.temp)}&deg;
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        <p>{conditions[0].main}</p>
        <p>
          H:{Math.round(mainData.temp_max)}&deg; L:
          {Math.round(mainData.temp_min)}&deg;
        </p>
      </CardFooter>
    </Card>
  );
}

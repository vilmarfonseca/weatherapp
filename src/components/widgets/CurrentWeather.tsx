import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function CurrentWeather() {
  return (
    <Card className='px-5'>
      <CardHeader>
        <CardTitle>Londrina</CardTitle>
        <CardDescription>My Location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          {Math.round(32.2)}&deg;
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        <p>Clear</p>
        <p>H:30&deg; L:10&deg;</p>
      </CardFooter>
    </Card>
  );
}

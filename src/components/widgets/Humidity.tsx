import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function HomePage() {
  return (
    <Card className='px-5'>
      <CardHeader>
        <CardTitle>Humidity</CardTitle>
        <CardDescription>Current Humidity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          {Math.round(94)}%
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        <p></p>
        <p></p>
      </CardFooter>
    </Card>
  );
}

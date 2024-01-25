import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

interface HumidityProps {
  value: number;
}

export default function Humidity({ value }: HumidityProps) {
  return (
    <Card className='px-5 sm:py-0 py-6'>
      <CardHeader>
        <CardTitle>Humidity</CardTitle>
        <CardDescription>Current Humidity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          {Math.round(value)}%
        </div>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

interface HumidityProps {
  value: number;
  loading: boolean;
}

export default function Humidity({ value, loading }: HumidityProps) {
  return (
    <Card className='px-5 sm:py-0 py-6'>
      <CardHeader>
        <CardTitle>Humidity</CardTitle>
        <CardDescription>Current Humidity</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className='flex w-full h-24 mb-2' />
        ) : (
          <div className='flex justify-center text-8xl font-bold'>
            {Math.round(value)}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}

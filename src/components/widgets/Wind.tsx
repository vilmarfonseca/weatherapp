import type { Wind } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Compass from '@/components/ui/Compass';
import { Skeleton } from '@/components/ui/Skeleton';

interface WindProps {
  data: Wind;
  unit: string;
  loading: boolean;
}

export default function Wind({
  data: { speed, deg },
  unit,
  loading,
}: WindProps) {
  return (
    <Card className='px-12 sm:py-0 py-6'>
      <CardHeader>
        <CardTitle>Wind</CardTitle>
        <CardDescription>Speed and Direction</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className='flex w-full h-32 mb-2 rounded-full' />
        ) : (
          <div className='flex justify-center text-8xl font-bold'>
            <Compass speed={speed} deg={deg} unit={unit} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

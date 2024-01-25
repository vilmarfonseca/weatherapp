import type { Wind } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Compass from '@/components/ui/Compass';

interface WindProps {
  data: Wind;
  unit: string;
}

export default function Wind({ data: { speed, deg }, unit }: WindProps) {
  return (
    <Card className='px-12 sm:py-0 py-6'>
      <CardHeader>
        <CardTitle>Wind</CardTitle>
        <CardDescription>Speed and Direction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          <Compass speed={speed} deg={deg} unit={unit} />
        </div>
      </CardContent>
    </Card>
  );
}

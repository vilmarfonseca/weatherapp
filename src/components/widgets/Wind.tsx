import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Compass from '@/components/ui/Compass';

export default function Wind() {
  return (
    <Card className='px-12'>
      <CardHeader>
        <CardTitle>Wind</CardTitle>
        <CardDescription>Speed and Direction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          <Compass speed={4.12} deg={120} />
        </div>
      </CardContent>
    </Card>
  );
}

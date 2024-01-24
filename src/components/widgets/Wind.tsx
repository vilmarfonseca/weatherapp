import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Compass from '@/components/ui/Compass';

export default function HomePage() {
  return (
    <Card className='px-5'>
      <CardHeader>
        <CardTitle>Wind</CardTitle>
        <CardDescription>Speed and Direction</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center text-8xl font-bold'>
          <Compass speed={4.12} deg={120} />
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-center justify-center'>
        <p></p>
        <p></p>
      </CardFooter>
    </Card>
  );
}

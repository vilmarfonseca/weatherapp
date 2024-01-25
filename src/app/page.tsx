import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Humidity from '@/components/widgets/Humidity';
import Wind from '@/components/widgets/Wind';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex flex-col min-h-screen items-center justify-center py-12 text-center gap-5'>
          <div className='flex items-center space-x-2'>
            <Switch id='airplane-mode' />
            <Label htmlFor='airplane-mode'>Celsius</Label>
          </div>
          <div className='flex gap-6'>
            <Humidity />
            <CurrentWeather />
            <Wind />
          </div>
        </div>
      </section>
    </main>
  );
}

import CurrentWeather from '@/components/widgets/CurrentWeather';
import Humidity from '@/components/widgets/Humidity';
import Wind from '@/components/widgets/Wind';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen items-center justify-center py-12 text-center gap-5'>
          <div className='flex gap-6'>
            <CurrentWeather />
            <Humidity />
            <Wind />
          </div>
        </div>
      </section>
    </main>
  );
}

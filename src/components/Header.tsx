import { SearchDialog } from '@/components/SearchDialog';

export default function Header() {
  return (
    <div className='container absolute flex top-2 text-gray-700 w-full justify-between'>
      <h1>Vilmar's WeatherApp</h1>
      <div className='flex'>
        <SearchDialog />
      </div>
    </div>
  );
}

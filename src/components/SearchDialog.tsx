'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { getCity } from '@/lib/api/getCity';
import { City } from '@/lib/types';

import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';

export function SearchDialog() {
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const searchParams = useSearchParams();

  const handleSearch = async (e: React.FormEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value) {
      setCities(await getCity({ q: (e.target as HTMLInputElement).value }));
    } else {
      setCities([]);
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  const handleCityClick = async (city: City) => {
    router.push(
      `/?lat=${city.lat}&lon=${city.lon}${
        searchParams.get('units') ? `&units=${searchParams.get('units')}` : ''
      }`
    );
    setOpen(false);
    setCities([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button
          variant='outline'
          className='text-gray-400 bg-gray-100 dark:bg-dark flex w-40 sm:w-64'
        >
          Search city...
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] max-w-xs'>
        <DialogHeader>
          <DialogTitle>Search Location</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='flex w-full'>
            <Input
              id='Location'
              placeholder='Londrina, PR, Brazil'
              className='w-full'
              onChange={handleInputChange}
              onKeyUp={handleSearch}
              value={value}
            />
          </div>
          <div className='flex flex-col'>
            {cities.length > 0
              ? cities.map((city: City) => (
                  <div
                    key={city.lat + city.lon}
                    className='hover:bg-gray-200 dark:hover:text-black px-3 py-2 cursor-pointer rounded'
                    onClick={() => handleCityClick(city)}
                  >
                    {city.name
                      ? `${city.name}, ${city.state}, ${city.country}`
                      : ''}
                  </div>
                ))
              : value && <span>No Cities Found</span>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';

export default function ToggleUnits() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [units, setUnits] = useState(searchParams.get('units') || 'metric');

  const handleClick = async () => {
    const newUnit = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnit);
    router.push(
      `/?units=${newUnit}${
        searchParams.get('lat') ? `&lat=${searchParams.get('lat')}` : ''
      }${searchParams.get('lon') ? `&lon=${searchParams.get('lon')}` : ''}`
    );
  };

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='units' onClick={handleClick} checked={units !== 'metric'} />
      <Label htmlFor='units'>
        {units === 'metric' ? 'Celsius' : 'Fahrenheit'}
      </Label>
    </div>
  );
}

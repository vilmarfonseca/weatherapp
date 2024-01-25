'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';

export default function ToggleUnits() {
  const [units, setUnits] = useState('metric');
  const router = useRouter();

  const handleClick = async () => {
    const newUnit = units === 'metric' ? 'imperial' : 'metric';
    setUnits(newUnit);
    router.push(`/?units=${newUnit}`);
  };

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='units' onClick={handleClick} />
      <Label htmlFor='units'>
        {units === 'metric' ? 'Celsius' : 'Fahrenheit'}
      </Label>
    </div>
  );
}

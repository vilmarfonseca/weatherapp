import Image from 'next/image';

interface WeatherIconProps {
  icon: string;
  className?: string;
}

export default function WeatherIcon({ className, icon }: WeatherIconProps) {
  return (
    <div
      className={`relative h-16 w-16 sm:h-32 sm:w-32 invert-0 dark:invert ${className}`}
    >
      <Image fill alt='' src={`/icons/${icon}.png`} />
    </div>
  );
}

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='absolute bottom-2 text-gray-700 w-full flex justify-center'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='https://vilmarfonseca.com'>
        Vilmar Fonseca
      </UnderlineLink>
    </footer>
  );
}

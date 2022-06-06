import Link from 'next/link';

export default function Footer() {
  const date: number = new Date().getFullYear();

  return (
    <div className='bg-white border border-t-2 px-8 py-6 mt-8'>
      <Link href='/'>
        <a>
          <img src='/logo.svg' alt='Visits logo' className='h-6' />
        </a>
      </Link>
      <p className='text-xs font-medium text-gray-500 mt-1'>
        Visits &copy; {date}
      </p>
    </div>
  );
}

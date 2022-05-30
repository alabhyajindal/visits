import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='bg-white border border-t-2 px-8 py-6'>
      <div className='relative h-8 w-16'>
        <Link href='/'>
          <a>
            <Image
              priority
              src={logo}
              layout='fill'
              objectFit='contain'
              alt='Visits logo'
            />
          </a>
        </Link>
      </div>
      <p className='text-xs font-medium text-gray-500'>Visits &copy; {date}</p>
    </div>
  );
}

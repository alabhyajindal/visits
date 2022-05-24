import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='shadow-md py-4 px-8 sticky flex items-center justify-between'>
      {/* Left */}
      <Link href='/'>
        <a>
          <Image
            src='/logo.png'
            objectPosition='left'
            alt='Visit Logo'
            height={50}
            width={100}
            className='cursor-pointer'
          />
        </a>
      </Link>

      {/* Right */}
      <div className='flex gap-4 text-md lg:text-lg items-center'>
        <Link href='/create'>
          <a>
            <button className='bg-purple-500 text-white rounded-md p-2'>
              List your Visit
            </button>
          </a>
        </Link>

        <h2>Sign In</h2>
      </div>
    </div>
  );
}

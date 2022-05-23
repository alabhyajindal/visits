import Image from 'next/image';

export default function Header() {
  return (
    <div className='shadow-md py-4 px-8 sticky flex items-center justify-between'>
      {/* Left */}
      <Image
        src='/logo.png'
        objectPosition='left'
        alt='Visit Logo'
        height={50}
        width={100}
      />
      {/* Right */}
      <div className='flex gap-4 text-md lg:text-lg'>
        <h2>List your Visit</h2>
        <h2>Sign In</h2>
      </div>
    </div>
  );
}

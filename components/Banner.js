import Image from 'next/image';
import banner from '../public/banner.jpg';

export default function Banner() {
  return (
    <div className=''>
      {/* Hero section */}
      <h1 className='text-4xl lg:text-5xl max-w-sm font-semibold'>
        Streamlined industrial visit experience for{' '}
        <span className='text-blue-500'>everyone</span>
      </h1>
    </div>
  );
}

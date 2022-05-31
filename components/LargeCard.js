import Image from 'next/image';
import Link from 'next/link';

export default function LargeCard({ heading, sub, image }) {
  return (
    <div>
      <div className='flex justify-center active:scale-95 transition transform duration-200'>
        <div className='relative w-[30rem] h-[30rem]'>
          <Image
            src={image}
            objectFit='cover'
            layout='fill'
            className='rounded-md brightness-50 hover:opacity-95 transition transform duration-200'
          />
          <h1 className='absolute top-5 left-10 text-white text-5xl font-semibold '>
            <span className='text-blue-500 font-bold text-xl uppercase'>
              {sub}
            </span>
            <br />
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/dist/client/image';

export default function Card({ image, title }) {
  return (
    <div>
      <div className='bg-gray-400 relative aspect-w-16 aspect-h-9'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          className='rounded-sm'
        />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

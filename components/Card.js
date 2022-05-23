import Image from 'next/dist/client/image';

export default function Card({
  image,
  title,
  location,
  maxGuests,
  price,
  duration,
}) {
  return (
    <div className='text-gray-700 rounded-sm hover:bg-gray-100 cursor-pointer transition transform duration-200 ease-out p-2'>
      <div className='aspect-h-9 aspect-w-16 relative'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          className='rounded-sm'
        />
      </div>
      <div className='p-2'>
        <h1 className='text-xl font-medium '>
          {title},{' '}
          <span className='font-normal text-gray-600 text-lg'>{location}</span>
        </h1>
        <div className='text-gray-500'>
          <p className='text-lg'>
            ₹{price} for {maxGuests} visitors
          </p>
          <p className='text-gray-350'>{duration} hours guided tour</p>
        </div>
      </div>
    </div>
  );
}

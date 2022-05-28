import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';

export default function Card({
  id,
  image,
  title,
  location,
  maxGuests,
  price,
  duration,
}) {
  return (
    <Link href={`/visits/${id}`}>
      <a target='_blank'>
        <div className='text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer transition transform duration-200 ease-out p-2 '>
          {image && (
            <div className='aspect-h-9 aspect-w-16 relative'>
              <Image
                priority
                src={image}
                layout='fill'
                objectFit='cover'
                className='rounded-md'
                alt={image.title}
              />
            </div>
          )}
          <div className='p-2'>
            <h1 className='text-xl font-semibold text-gray-700'>
              {title},{' '}
              <span className='font-normal text-gray-600 text-lg'>
                {location}
              </span>
            </h1>
            <div className='text-gray-500'>
              <p className='text-lg'>
                ₹{Intl.NumberFormat('en-IN').format(price)} for {maxGuests}{' '}
                visitors
              </p>
              <p className='text-gray-350'>{duration} hours guided tour</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

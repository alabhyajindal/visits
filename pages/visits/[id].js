import Header from '../../components/Header';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default function ListedVisit(visit) {
  return (
    <div>
      <Header />
      <div className='mx-4 mt-8'>
        <h1 className='text-3xl lg:text-4xl font-semibold'>{visit.title}</h1>

        <div className='mt-2 md:mt-4 xl:mt-6 relative aspect-w-16 aspect-h-9'>
          <Image
            src={visit.image}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>
        <p className='mt-2 md:text-lg'>{visit.description}</p>
        <div className='mt-2 md:text-lg'>
          <p>Location: {visit.location}</p>
          <p>Duration: {visit.duration} hours</p>
          <p>
            ₹{Intl.NumberFormat('en-IN').format(visit.price)} for{' '}
            {visit.maxGuests} visitors, or ₹
            {Intl.NumberFormat('en-IN').format(visit.price / visit.maxGuests)}{' '}
            per head
          </p>
        </div>
        <div className='mt-4'>
          <h2 className='text-xl md:text-2xl font-medium'>Available Dates</h2>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const visits = await prisma.visit.findMany({
    select: { id: true },
  });

  return {
    paths: visits.map((visit) => ({
      params: { id: visit.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const visit = await prisma.visit.findUnique({
    where: { id: params.id },
  });

  if (visit) {
    return {
      props: JSON.parse(JSON.stringify(visit)),
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

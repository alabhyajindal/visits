import { PrismaClient } from '@prisma/client';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const prisma = new PrismaClient();

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function ListedVisit(visit) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <div>
      <Head>
        <title>
          {visit?.title || ''}, {visit?.location || ''} - Visits
        </title>
        <meta name='description' content={visit?.description || ''} />
      </Head>
      <h1 className='text-3xl lg:text-4xl font-semibold'>
        {visit?.title || ''}
      </h1>

      <div className='mt-2 md:mt-4 xl:mt-6 relative aspect-w-16 aspect-h-9'>
        {visit?.image ? (
          <Image
            src={visit.image}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
            alt={visit.title}
          />
        ) : null}
      </div>
      <p className='mt-2 md:text-lg'>{visit.description}</p>
      <div className='mt-2 md:text-lg'>
        <p>Location: {visit?.location || ''}</p>
        <p>Duration: {visit?.duration || 0} hours</p>
        <p>
          ₹{Intl.NumberFormat('en-IN').format(visit.price)} for{' '}
          {visit?.maxGuests || 0} visitors, or ₹
          {Intl.NumberFormat('en-IN').format(
            visit?.price / visit?.maxGuests || 0
          )}{' '}
          per head
        </p>
      </div>
      <form action='/api/checkout' method='POST' className='mt-4'>
        <button type='submit' role='link' className='btn-primary'>
          Book
        </button>
      </form>
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
    fallback: 'blocking',
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

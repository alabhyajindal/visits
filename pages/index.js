import Head from 'next/head';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import LargeCard from '../components/LargeCard';
import Paragraph from '../components/Paragraph';
import company from '../public/company.jpg';
import students from '../public/students.jpg';

export default function Visit() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      toast.success(
        'Visit booked! You will receive an email confirmation shortly.',
        { duration: 6000 }
      );
    }

    if (query.get('canceled')) {
      toast.error(
        `Order canceled, continue to explore and book a visit when you're ready.`,
        { duration: 3000 }
      );
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Hero />
      <Paragraph />

      <div className='flex flex-col gap-16 md:flex-row md:justify-center mt-8 mx-8'>
        <LargeCard
          heading='Host a Visit'
          sub='For Companies'
          image={company}
          alt='A tall building'
          isCompany={true}
        />
        <LargeCard
          heading='Find a Visit'
          sub='For Students'
          image={students}
          alt='A group of students listening to a lecture by their professor'
          isCompany={false}
        />
      </div>

      <Toaster />
    </div>
  );
}

import Head from 'next/head';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Banner from '../components/Banner';

export default function Visit() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      toast.success('Visit booked! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      toast.error(
        `Order canceled, continue to explore and book a visit when you're ready.`
      );
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Banner />

      {/* Explaination of the platform over multiple sections */}

      {/* CTA for Companies */}

      {/* CTA for Students */}
    </div>
  );
}

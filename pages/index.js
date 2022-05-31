import Head from 'next/head';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Hero from '../components/Hero';
import LargeCard from '../components/LargeCard';
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

      {/* Add an image or preferrably an illustration on the right side of the paragraph */}
      <div className='flex flex-col gap-4 mb-8 max-w-lg mx-8'>
        <p>
          The current industrial visit experience is broken. When a class wants
          to organize a industrial visit the first thing they have to figure out
          is what all companies in their city actually provide visits. Even
          finding these companies is not easy since most companies are not
          easily reachable and there is no central directly which provides this
          information.
        </p>
        <p>
          An industrial visit is a crucial part of a class's curriculum. I (
          <a
            className='text-blue-500 hover:underline'
            href='https://twitter.com/alabhyajindal'
            target='_blank'
          >
            @alabhyajindal
          </a>
          ) believe that students should spend less time on finding out their
          options and more time on choosing the perfect option for them.
        </p>
        <p>
          That's why I created Visits - it aims to be a platform where great
          companies can list visits and students can book them.
        </p>

        <p>
          An industrial visit is a great opportunity for companies and students.
          It offers companies a chance to attract talent, as most often, the
          visiting students are the potential future employees of the company.
          Students benefit from industrial visits by getting exposure to
          real-world business practices and helps them expand their network.
        </p>
      </div>

      <div className='flex flex-col gap-16 md:flex-row md:justify-center'>
        <LargeCard
          heading='Host a Visit'
          sub='For Companies'
          image={company}
          isCompany={true}
        />
        <LargeCard
          heading='Find a Visit'
          sub='For Students'
          image={students}
          isCompany={false}
        />
      </div>
      <Toaster />
    </div>
  );
}

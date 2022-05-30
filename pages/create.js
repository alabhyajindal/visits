import Head from 'next/head';
import ListingForm from '../components/ListingForm';

export default function Create() {
  return (
    <div>
      <Head>
        <title>List a visit - Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <h2 className='text-3xl font-medium text-gray-700'>List a visit</h2>
      <p className='text-lg text-gray-700'>
        Fill out the form below to list a new visit
      </p>
      <ListingForm />
    </div>
  );
}

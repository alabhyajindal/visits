import { supabase } from '../client';
import Head from 'next/head';
import ListingForm from '../components/ListingForm';

export default function Create({ user }) {
  return (
    <div className='mx-auto max-w-lg my-8'>
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

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: '/' } };
  }

  return { props: { user } };
}

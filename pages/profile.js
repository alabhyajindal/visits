import { supabase } from '../client';
import Head from 'next/head';
import ProfileForm from '../components/ProfileForm';

export default function profile({ user }) {
  return (
    <div>
      <Head>
        <title>Create a profile - Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <h2 className='text-3xl font-medium text-gray-700'>Welcome to Visits!</h2>
      <h2>Create a Profile to get started</h2>
      <ProfileForm />
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

import { supabase } from '../client';
import Head from 'next/head';
import ProfileForm from '../components/ProfileForm';

export default function profile({ user }) {
  console.log(user);
  return (
    <div>
      <Head>
        <title>Create a profile - Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <h2 className='text-3xl font-medium text-gray-700'>Create a profile</h2>
      <ProfileForm />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = supabase.auth.api.getUserByCookie();

  if (!user) {
    return { props: {}, redirect: { destination: '/' } };
  }

  return { props: { user } };
}

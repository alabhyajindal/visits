import Head from 'next/head';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';

export default function profile() {
  return (
    <div>
      <Head>
        <title>Create a profile - Visit</title>
        <meta name='description' content='Visit' />
      </Head>
      <Header />
      <div className='mt-8 mx-16'>
        <h2 className='text-3xl font-medium text-gray-700'>Create a profile</h2>
        <ProfileForm />
      </div>
    </div>
  );
}

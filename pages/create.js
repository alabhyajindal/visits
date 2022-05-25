import Head from 'next/head';
import Header from '../components/Header';
import ListingForm from '../components/ListingForm';

export default function Create() {
  return (
    <div>
      <Head>
        <title>List a visit - Visit</title>
        <meta name='description' content='Visit' />
      </Head>
      <Header />
      <div className='mt-8 mx-16'>
        <h2 className='text-xl font-medium'>List a visit</h2>
        <p>Fill out the form below to list a new visit.</p>
        <ListingForm />
      </div>
    </div>
  );
}

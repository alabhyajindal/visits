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
      <ListingForm />
    </div>
  );
}

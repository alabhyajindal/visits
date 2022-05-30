import Head from 'next/head';
import Banner from '../components/Banner';

export default function Visit() {
  return (
    <div>
      <Head>
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Banner />
    </div>
  );
}

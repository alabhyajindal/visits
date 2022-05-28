import Head from 'next/head';
import Grid from '../components/Grid';
import Header from '../components/Header';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const visits = await prisma.visit.findMany();
  return {
    props: { visits: JSON.parse(JSON.stringify(visits)) },
  };
}

export default function Visit({ visits = [] }) {
  return (
    <div className='font-sans'>
      <Head>
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Header />
      <Grid visits={visits} />
    </div>
  );
}

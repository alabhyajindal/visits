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
    <div>
      <Head>
        {/* Added this link below to solve */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=optional'
          rel='stylesheet'
        />
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Header />
      <Grid visits={visits} />
    </div>
  );
}

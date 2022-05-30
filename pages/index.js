import Head from 'next/head';
import Grid from '../components/Grid';
import { PrismaClient } from '@prisma/client';
import Banner from '../components/Banner';

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
        <title>Visits</title>
        <meta name='description' content='Visit' />
      </Head>
      <Banner />
    </div>
  );
}

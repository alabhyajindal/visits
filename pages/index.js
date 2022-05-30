import Head from 'next/head';
import Grid from '../components/Grid';
import Header from '../components/Header';
import { PrismaClient } from '@prisma/client';
import Footer from '../components/Footer';

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
      <Grid visits={visits} />
    </div>
  );
}

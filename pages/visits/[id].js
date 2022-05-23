import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default function ListedVisit({ visit }) {
  console.log(visit);
  return (
    <div>
      <h1>Hello from the visit listing page!</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const visits = await prisma.visit.findMany({
    select: { id: true },
  });

  return {
    paths: visits.map((visit) => ({
      params: { id: visit.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const visit = await prisma.visit.findUnique({
    where: { id: params.id },
  });

  if (visit) {
    return {
      props: JSON.parse(JSON.stringify(visit)),
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

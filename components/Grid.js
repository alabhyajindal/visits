import Card from './Card';

export default function Grid({ visits = [] }) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 my-8'>
      {visits.map((visit) => (
        <Card key={visit.id} {...visit} />
      ))}
    </div>
  );
}

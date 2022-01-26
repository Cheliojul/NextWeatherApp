import { useRouter } from 'next/router';
const Details = () => {
  const router = useRouter();
  return (
    <div className='flex'>
      <h1>{router.query.country}</h1>
      <h1>{router.query.name}</h1>
      <h1>{router.query.description}</h1>
      <h1>{router.query.temp}</h1>
    </div>
  );
};

export default Details;

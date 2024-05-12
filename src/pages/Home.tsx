import Banner from '../components/Banner';
import Carousel from '../components/carousel';

export function Home() {
  return (
    <>
      <Banner/>
      <div className='py-11'>
        <h3 className='text-center'>Novedades</h3>
        <Carousel/>
      </div>
      <div className='py-11'>
        <h3 className='text-center'>Lo más vendido</h3>
        <Carousel />
      </div>
    </>
  );
}

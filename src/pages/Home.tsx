import Banner from '../components/Banner';
import Carousel from '../components/carousel';


export function Home() {
  return (
    <>
      <Banner/>
      <div className='py-11'>
        <h3 className='font-cursive text-center'>Novedades</h3>
        <Carousel category="new"/>
      </div>
      <div className='py-11'>
        <h3 className='font-cursive text-center'>Lo más vendido</h3>
        <Carousel category="best-seller"/>
      </div>
    </>
  );
}

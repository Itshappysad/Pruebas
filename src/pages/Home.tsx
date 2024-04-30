import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Subsitems from "../components/Subs";
import Carousel from "../components/carousel";

export function Home() {
  return (
    <>
      <>
        <Banner></Banner>
        <div className="py-11">
          <h3 className="text-center">Novedades</h3>
          <Carousel></Carousel>
        </div>
        <div className="py-11">
          <h3 className="text-center">Lo mas vendido</h3>
          <Carousel></Carousel>
        </div>
        {/* <Subsitems Subscription={{
          id: 0,
          name: "",
          price: 0,
          imgUrl: ""
        }}></Subsitems>*/}
      </>
      <Footer></Footer>
    </>
  );
}

/*https://www.youtube.com/watch?v=Kx8XlKRBZx8 use this tutorial to actually put something here   */
8;

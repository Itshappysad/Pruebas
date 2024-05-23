import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CarouselSize from "../components/carousel";

export function Home() {
  return (
    <>
      <Banner />
      <div className="py-11">
        <h3 className="font-karla text-center">Novedades</h3>
        <CarouselSize category={""} />
      </div>
      <div className="py-11">
        <h3 className="font-karla text-center">Lo más vendido</h3>
        <CarouselSize category={""} />
      </div>
      <Footer />
    </>
  );
}

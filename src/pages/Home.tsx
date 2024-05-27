import Banner from "../components/Banner";
import CarouselSize from "../components/carousel";

export function Home() {
  return (
    <>
      <Banner />
      <div className="py-11">
        <h3 className="font-karla text-center">Novedades</h3>
        <CarouselSize category={"new"} />
      </div>
      <div className="py-11">
        <h3 className="font-karla text-center">Lo más vendido</h3>
        <CarouselSize category={"best-seller"} />
      </div>
    </>
  );
}

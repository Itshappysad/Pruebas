import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getProductsByCategory } from "../core/database";
import { StoreItem } from "../components/StoreItem";
import { CompanyItem } from "../core/types";


export function Home() {

  const settingsNews = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus: true,
  };

  const settingsBestSeller = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnFocus: true,
  };

  const [newItems, setNewItems] = useState<CompanyItem[] | null>(null);
  const [bestSellerItems, setBestSellerItems] = useState<CompanyItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = "new";
        const items = await getProductsByCategory(category);
        setNewItems(items);
      } catch (error) {
        console.error('No se encontraron productos en la categoría:', category, error);
        setError(`No se encontraron productos en la categoría [${category}]`);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = "best-seller";
        const items = await getProductsByCategory(category);
        setBestSellerItems(items);
      } catch (error) {
        console.error('No se encontraron productos en la categoría:', category, error);
        setError(`No se encontraron productos en la categoría [${category}]`);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Banner />
      <h3 className="font-karla text-center">Novedades</h3>
      <div className="">
        {error && <p>{error}</p>}
        {newItems && (
          <Slider {...settingsNews}>
            {newItems.map(item => (
                <StoreItem product={item} />
            ))}
          </Slider>
        )}
      </div>

      <h3 className="font-karla text-center">Lo más vendido</h3>
      <div>
        {error && <p>{error}</p>}
        {newItems && (
          <Slider {...settingsBestSeller}>
            {bestSellerItems.map(item => (
              <div key={item.id}> {/* Ensure a unique key for each item */}
                <StoreItem product={item} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

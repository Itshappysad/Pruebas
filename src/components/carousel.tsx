import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../core/database";
import { CompanyItem } from "../core/types";
import { StoreItem } from '../components/StoreItem';
import "./carousel.css"

const CarouselSize = ({ category }: { category: string }) => {
  const [storeItems, setStoreItems] = useState<CompanyItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory(category);

        if (!products) {
          setError(`No se encontraron productos en la categoría [${category}]`);
          return;
        }

        setStoreItems(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(`Error al buscar productos en la categoría [${category}]`);
      }
    };

    fetchProducts();
  }, [category]);

  if (error) {
    return <div className="errorMessage">Error: {error}</div>;
  }

  if (!storeItems) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  {
    return (
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="carousel"
      >
        <CarouselContent>
        {storeItems.map((item) => (
          <StoreItem product={item} />
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
};

export default CarouselSize;

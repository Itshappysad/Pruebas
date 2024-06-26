import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../core/database";
import { Product } from "../core/types";
import { getProductImage } from "../core/storage";

const CarouselSize = ({ category }: { category: string }) => {
  const [storeItems, setStoreItems] = useState<Product[] | null>(null);
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
        className="w-full h-full"
      >
        <CarouselContent>
          {Array.from({ length: 60 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className=" aspect-square items-center justify-center p-6">
                    {storeItems.map((item) => (
                      <div key={item.id}>
                        <a
                          className="text-decoration-none text-black"
                          href={"/product/".concat(item.id)}
                        >
                          <ProductImage id={item.id} name={item.name} />
                          <CardTitle>{item.name}</CardTitle>
                        </a>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
};

const ProductImage = ({ id, name }: { id: string; name: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await getProductImage(id);
        setImageUrl(image);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [id]);

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={name}
      className="w-56 h-64 rounded-lg shadow-xl bg-white"
    />
  ) : (
    <div>Loading...</div>
  );
};
export default CarouselSize;

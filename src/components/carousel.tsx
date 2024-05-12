import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    let scrollPosition = 0;

    const scrollInterval = setInterval(() => {
      scrollPosition + 500;
      carousel!.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 10000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  return (
    <div className=" carousel relative w-full flex gap-6 snap-mandatory  overflow-x-auto pb-14  h-72  rounded-lg shadow-sm  place-items-stretch">
      {/* TODO: arreglar para consumir desde firebase */}
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-56 h-64 rounded-lg shadow-xl bg-white"
          src="public\imgs\LExTeFIPrhB3JmFZLeyY.png"
          alt="shirt1"
        />
      </div>
    </div>
  );
};

export default Carousel;

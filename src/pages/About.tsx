import Footer from "../components/Footer";
export function About() {
  return (
    <div className="about-page">
      <img
        src="imgs/AeVlogo.jpeg"
        alt="logo"
        className="max-h-48 max-y-48 rounded-full float-right"
      />
      <div className="container mx-auto mt-4 flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">¿Quienes Somos?</h2>
            <p className="text-gray-700 text-base">
              ¿Quiénes SOMOS? Nosotros somos innovación. Avocado-e-vestiti es un
              grupo de programadores que se pusieron de acuerdo para renovar las
              compras en el mundo de la moda, juntando la programación. Haciendo
              que hoy en día comprar ropa en línea sea un paseo facilitando todo
              para ustedes, nuestros clientes.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Nuestra Vision</h2>
            <p className="text-gray-700 text-base">
              Nuestra vision es ser una de las compañias lideres en la industria
              de la moda Ofreciendo una moda de cualidad accesible a varios
              clientes al precios muy atractivos. Podemos ofrecer a nuestros
              clientes una opción mas sostenible.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Nuestra Mision</h2>
            <p className="text-gray-700 text-base">
              Nuestra Mision es Enriquecer la vida de los consumidores con una
              propuesta de experiencia nueva, actual y conveniente, colaborando
              al desarrollo personal.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Valores</h2>
            <p className="text-gray-700 text-base">
              Responsabilidad social Innovacion Creatividad
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Historia</h2>
            <p className="text-gray-700 text-base">
              Avocado-e-Vestiti empieza como una idea de 3 adolecentes jugando ,
              con el pasar de los tiempos va avanzando hasta tener en claro esa
              idea de emprender de los 3 jovene, salidos de grados 10 empienzan
              a programar y idear como seria la empresa hasta el hoy en dia.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Equipo</h2>
            <p className="text-gray-700 text-base">
              - Juan Esteban Sierra - Andres Martinez Martinez - Nicolas lopez
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

const aboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default aboutPage;

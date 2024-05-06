import Footer from "../components/Footer";
export function About() {
  return (
    <div className="about-page">
      <img
        src="imgs/AeVlogo.jpeg"
        alt="logo"
        className="max-h-48 max-y-48 rounded-full float-right"
      />
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="row-span-3">
          <h1>Quienes Somos?</h1>
          <p>Nosotros somos innovacion.
            Avocado-e-vestiti es un grupo de programadores que se pusieron de acuerdo para.
            Renovar el mundo de la moda, juntando la programación con ella, haciendo que hoy en día comprar.
            La ropa en línea es un paseo, facilitando todo para ustedes los clientes.
          </p>
        </div>
        <div className="col-span-2">
          <h1> Nuestra Mision</h1>
          <p>Nuestra visión es ser parte de las grandes empresas de moda como Bershka, Falabella, H&M. 
            Para el 2030, estaremos posicionados en como una de las mejores por nuestra adaptación de las necesidades.
            De cada uno de nuestros clientes
          </p>
        </div>
        <div className="row-span-2 col-span-2"> 
        <h1>Valores:</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 5L9 17l-5.5-5.5l1.41-1.41L9 14.17L19.59 3.59zM3 21v-2h18v2z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 5L9 17l-5.5-5.5l1.41-1.41L9 14.17L19.59 3.59zM3 21v-2h18v2z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 5L9 17l-5.5-5.5l1.41-1.41L9 14.17L19.59 3.59zM3 21v-2h18v2z"/></svg>
        </div>
        <div className="row-span-4">
          <p> Nosotros somos aaaaaaaaaaaaaaaaaa</p>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

// const aboutPageStyles = `
//   .about-page {
//     max-width: 800px;
//     margin: 0 auto;
//     padding: 2rem;
//     text-align: center;
//   }
//   .about-page ul {
//     font-size: 8rem;
//     margin-bottom: 1rem;
//     color: #999;
//   }

//   .about-page h1 {
//     font-size: 2.5rem;
//     margin-bottom: 1rem;
//     color: #444;
//   }

//   .about-page h2 {
//     font-size: 1.5rem;
//     margin-top: 2rem;
//     margin-bottom: 0.5rem;
//     color: #666;
//   }

//   .about-page p {
//     font-size: 10rem;
//     margin-bottom: 1rem;
//     color: #999;
//   }
// `;

const aboutPage = () => {
  return (
    <>
      {/* <style>{aboutPageStyles}</style> */}
      <About />
    </>
  );
};

export default aboutPage;

export function About() {
  return (
    <div className="about-page">
      <img
        src="imgs/AeVlogo.jpeg"
        alt="logo"
        className="max-h-48 max-y-48 rounded-full float-right"
      />
      <h1>¿Quiénes somos?</h1>
      <h2>Nuestra misión</h2>
      <p>
        Nuestra misión es proporcionar soluciones tecnológicas innovadoras y de
        alta calidad a nuestros clientes.
      </p>

      <h2>Nuestra visión</h2>
      <p>
        Nuestra visión es ser líderes en la industria tecnológica, brindando
        soluciones personalizadas y adaptadas a las necesidades de cada cliente.
      </p>

      <h2>Valores</h2>
      <p>
        Nuestros valores se basan en la integridad, la colaboración, el respeto
        y la innovación.
      </p>

      <h2>Historia</h2>
      <p>
        Fundada en 2010, hemos crecido constantemente y nos hemos adaptado a las
        cambiantes necesidades del mercado tecnológico.
      </p>

      <h2>Equipo</h2>
      <p>
        Nuestro equipo está compuesto por profesionales altamente capacitados y
        apasionados por la tecnología y la moda.
      </p>
    </div>
  );
}

const aboutPageStyles = `
  .about-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .about-page h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #444;
  }

  .about-page h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #666;
  }

  .about-page p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #999;
  }
`;

const aboutPage = () => {
  return (
    <>
      <style>{aboutPageStyles}</style>
      <About />
    </>
  );
};

export default aboutPage;

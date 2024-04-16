import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="bubbles shadow-sm mb-3" />
      <div className="content  ">
        <div className="footer.content">
          <div>
            <h6> Contactanos</h6>
            <a href="#">Gmail</a>
            <a
              href="https://www.instagram.com/avocadoevestiti/"
              target="_blank"
            >
              Instagram
            </a>
          </div>

          <div>
            <h6>Informacion</h6>
            <a href="./src/pages/About.tsx"> Sobre nosotros</a>
          </div>

          <div>
            <h6>Ayuda</h6>
            <a href="#">Servicio al cliente</a>
          </div>
        </div>
        <div>
          <p>&copy;2024 Avocado e Vestiti Incorporated</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

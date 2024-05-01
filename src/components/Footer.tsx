import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer mt-20'>
      <div className='bubbles shadow-sm mb-3' />
      <div className='content  '>
        <div className='footer.content'>
          <div>
            <h6> Contactanos</h6>
            <a
              href='https://www.instagram.com/avocadoevestiti/'
              target='_blank'
            >
              Instagram
            </a>
          </div>

          <div>
            <h6>Informacion</h6>
            <Link to='/About'>Sobre nosotros</Link>
          </div>

          <div>
            <h6>Ayuda</h6>
            <a
              href='https://www.instagram.com/avocadoevestiti/'
              target='_blank'
            >
              Servicio al cliente
            </a>
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

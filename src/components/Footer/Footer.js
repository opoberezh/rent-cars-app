import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { FooterContainer } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaFacebook size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
      </ul>
      <address>
        <ul>
          <li>
            <a href="mailto:info@rent_car.com">
              <MdEmail size={24} />
              info@rent-car.com
            </a>
          </li>
          <li>
            <a href="tel:+380730000000" className="header-tel link">
              <AiOutlinePhone size={24} />
              +380 (73) 000-00-00
            </a>
          </li>
        </ul>
      </address>
    </FooterContainer>
  );
}

export default Footer;

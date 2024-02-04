import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import FooterLogo from '../../assets/img/logo-footer.svg';

const FooterContainer = styled.footer`
  align-items: center;
  background-color: #2c3147;
  color: #fff;
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 50px 0;

  & > img {
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 25px;
    padding: 50px 20px 25px;
  }
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    margin: 25px 0;
  }

  & a {
    align-items: center;
    color: #fff;
    display: flex;
    font-weight: 300;
    gap: 5px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: #4e8aa9;
    }

    & svg {
      color: #4e8aa9;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterContainer id="footer">
      <img src={FooterLogo} />
      <FooterList>
        <li>
          <Link to="https://www.facebook.com/bazearquiteturaeconstrucao">
            <FaFacebookF /> Facebook
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/bazearquitetura/">
            <FaInstagram /> Instagram
          </Link>
        </li>
        <li>
          <Link to="https://wa.me/+5554999010483">
            <IoLogoWhatsapp /> WhatsApp
          </Link>
        </li>
        <li>
          <Link to="mailto:projetos@bazearquitetura.com">
            <IoMdMail /> E-mail
          </Link>
        </li>
        <li>
          <Link to="tel:555430455003">
            <FaPhoneAlt /> Telefone
          </Link>
        </li>
        <li>
          <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D-28.253548487514%252C-52.411351203918%26fbclid%3DIwAR3MALVxeQxkeveYp-has2pmBnbdwt1SSBqp11sSHv2JeZKD8b4jsag19-I&h=AT1HavEBoBLaJz3PEGgj9e0E-Cgp_UwERmowcHm8f_iMT2v9Xw3IZCieUzLj3_a2uIEBciCsxb7FjRCddu5rkAVLLxuN42K7E7MdU2VBSMzvo3ROQJRy_Kuio08qnvRIg5PS5Il_Kx18Tw5GYYLadqRWwbg">
            <IoLocationSharp /> Rua Bento Gonçalves, 1402 / 99020-060 Passo Fundo, RS
          </Link>
        </li>
      </FooterList>
    </FooterContainer>
  );
};

import { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { HeaderContainer, HeaderLogo, HeaderList, HeaderBtnMenu } from './styles';
import HeaderLogoImg from '../../assets/img/logo-topo.svg';

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleToggleClick = () => {
    setMenuMobile(!menuMobile);
  };

  const handleClickLink = () => {
    setMenuMobile(false);
  };

  const handleContactClick = () => {
    handleClickLink();
    animateScroll.scrollToBottom({ smooth: true, duration: 500, delay: 0 });
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <NavLink to="/">
            <HeaderLogo src={HeaderLogoImg} alt="Baze Arquitetura" />
          </NavLink>
          <HeaderBtnMenu type="button" onClick={handleToggleClick}>
            <span></span>
            <span></span>
            <span></span>
          </HeaderBtnMenu>
        </div>
        <nav>
          <HeaderList className={menuMobile ? 'headerList-active' : ''}>
            <li>
              <NavLink to="/" onClick={handleClickLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/residenciais" onClick={handleClickLink}>
                Residenciais
              </NavLink>
            </li>
            <li>
              <NavLink to="/edificios" onClick={handleClickLink}>
                Edifícios
              </NavLink>
            </li>
            <li>
              <NavLink to="/comerciais" onClick={handleClickLink}>
                Comerciais
              </NavLink>
            </li>
            <li>
              <NavLink to="/interior" onClick={handleClickLink}>
                Interiores
              </NavLink>
            </li>
            <li>
              <NavLink to="/time" onClick={handleClickLink}>
                Time
              </NavLink>
            </li>
            <li>
              <Link onClick={handleContactClick}>Contato</Link>
            </li>
          </HeaderList>
        </nav>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

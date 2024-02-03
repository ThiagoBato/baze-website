import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import style from 'styled-components';
import HeaderLogoImg from '../../assets/img/logo-topo.svg';

const HeaderContainer = style.header`
  align-items: center;
  background-color: #2C3147;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;

  @media (max-width: 840px) {
    display: block;
    & > div {
      align-items: center;
      display: flex;
      justify-content: space-between;
    } 
  }
`;
const HeaderLogo = style.img`
  max-width: 150px;
  width: 100%;
`;
const HeaderList = style.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  padding: 0;

  & a {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: #4E8AA9;
      cursor: pointer;
    }

    &.active {
      color: #4e8aa9;
    }
  }
  @media (max-width: 840px) {
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: 0.3s ease-in-out;

    &.headerList-active {
      display: flex;
      height: 286px;
      margin: 10px 0;
    }
  }
`;
const HeaderBtnMenu = style.button`
  background-color: #4E8AA9;
  border: none;
  border-radius: 5px;
  display: none;
  height: 35px;
  padding: 5px;

  & span {
    border-bottom: 1px solid #2C3147;
    padding: 0px 10px;
    width: 10px;
    display: block;
    margin: 5px;
  }
  @media (max-width: 840px) {
    display: block;
  }
`;

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleToggleClick = () => {
    setMenuMobile(!menuMobile);
  };
  const handleClickLink = () => {
    setMenuMobile(false);
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
              <NavLink to="/residencials" onClick={handleClickLink}>
                Residenciais
              </NavLink>
            </li>
            <li>
              <NavLink to="/buildings" onClick={handleClickLink}>
                Edifícios
              </NavLink>
            </li>
            <li>
              <NavLink to="/comercials" onClick={handleClickLink}>
                Comerciais
              </NavLink>
            </li>
            <li>
              <NavLink to="/interior" onClick={handleClickLink}>
                Interiores
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={handleClickLink}>
                Time
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleClickLink}>
                Contato
              </NavLink>
            </li>
          </HeaderList>
        </nav>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

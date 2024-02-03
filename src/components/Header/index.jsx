import { Outlet, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/residencials">Residenciais</NavLink>
          </li>
          <li>
            <NavLink to="/buildings">Edifícios</NavLink>
          </li>
          <li>
            <NavLink to="/comercials">Comerciais</NavLink>
          </li>
          <li>
            <NavLink to="/interior">Interiores</NavLink>
          </li>
          <li>
            <NavLink to="/team">Time</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

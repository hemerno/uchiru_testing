import { NavLink } from 'react-router-dom';
/* Styles */
import { HeaderWrapper } from './Header.style';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <section>
        <NavLink
          to="/"
          exact
          className="header-link"
          activeClassName="selected"
        >
          Все котики
        </NavLink>
        <NavLink
          to="/favourites"
          exact
          className="header-link"
          activeClassName="selected"
        >
          Любимые котики
        </NavLink>
      </section>
    </HeaderWrapper>
  );
};

export default Header;

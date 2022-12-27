import { FC } from 'react';
import { NavItem } from '../NavItem/NavItem';

export const NavBar: FC = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavItem path="/" text="Home" />
        <NavItem path="/people" text="People" />
      </div>
    </div>
  </nav>
);

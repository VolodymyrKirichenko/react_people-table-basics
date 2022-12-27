import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  path: string;
  text: string;
}

export const NavItem: FC<Props> = (props) => {
  const { path, text } = props;

  return (
    <NavLink
      className={({ isActive }) => cn('navbar-item', {
        'has-background-grey-lighter': isActive,
      })}
      to={path}
    >
      {text}
    </NavLink>
  );
};

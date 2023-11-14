import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const APP_PATH = '/goit-react-hw-08-phonebook';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to={`${APP_PATH}/`}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to={`${APP_PATH}/contacts`}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

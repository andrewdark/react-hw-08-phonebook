import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const APP_PATH = '/goit-react-hw-08-phonebook';
export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to={`${APP_PATH}/register`}>
        Register
      </NavLink>
      <NavLink className={css.link} to={`${APP_PATH}/login`}>
        Log In
      </NavLink>
    </div>
  );
};

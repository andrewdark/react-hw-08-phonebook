import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const APP_PATH = '/goit-react-hw-08-phonebook';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path={`${APP_PATH}/`} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={`${APP_PATH}/register`}
          element={
            <RestrictedRoute
              redirectTo={`${APP_PATH}/contacts`}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={`${APP_PATH}/login`}
          element={
            <RestrictedRoute
              redirectTo={`${APP_PATH}/contacts`}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={`${APP_PATH}/contacts`}
          element={
            <PrivateRoute
              redirectTo={`${APP_PATH}/login`}
              component={<ContactsPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

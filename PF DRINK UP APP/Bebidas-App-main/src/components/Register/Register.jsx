import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  const handleClick = () => {
    loginWithRedirect({ screen_hint: 'signup' });
  };

  return (
    <li className="nav-item">
      <NavLink
        exact
        to="/Registrarse"
        activeClassName="active"
        className="nav-links"
        onClick={handleClick}
      >
        Registrarse
      </NavLink>
    </li>
  );
};

export default Register;

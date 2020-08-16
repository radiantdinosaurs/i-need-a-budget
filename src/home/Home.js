/** ****************************
 * Dependencies
 ***************************** */
import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

//  TODO: Move this into a button file and create a navigation bar for this purpose
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

function Home() {
  return (
    <>
      <LoginButton />
    </>
  );
}

Home.propTypes = {};

export default Home;

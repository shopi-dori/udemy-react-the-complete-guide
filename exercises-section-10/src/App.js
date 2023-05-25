import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const IS_LOGGED_IN_LOCAL_STORAGE_KEY = 'isLoggedIn';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchLoggedInState();
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);

    saveLoggedInState(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);

    clearLoggedInState();
  };

  const clearLoggedInState = () => {
    localStorage.removeItem(IS_LOGGED_IN_LOCAL_STORAGE_KEY);
  };

  const saveLoggedInState = (isLoggedInState) => {
    localStorage.setItem(IS_LOGGED_IN_LOCAL_STORAGE_KEY, isLoggedInState.toString());
  };

  const fetchLoggedInState = () => {
    const savedIsLoggedIn = localStorage.getItem(IS_LOGGED_IN_LOCAL_STORAGE_KEY);

    if (savedIsLoggedIn) {
      const parsedIsLoggedIn = savedIsLoggedIn.toLowerCase() === true.toString();

      setIsLoggedIn(parsedIsLoggedIn);
    }
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

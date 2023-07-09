import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

function withLayout(Component, config) {
  return (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    }, []);
    return (
      <>
        <Header
          onLogout={() => {
            config.onLogout();
            setIsLoggedIn(false);
            window.localStorage.removeItem("isLoggedIn");
          }}
          isAuthenticated={isLoggedIn}
        />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}

export default withLayout;
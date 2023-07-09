import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Backdrop from "./components/Backdrop";

import { useUser } from "./provider/UserProvider";

const Main = lazy(() => import("./pages/Main"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/404"));
const Input = lazy(() => import("./pages/Input"));
const Menu = lazy(() => import("./pages/Menu"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  const { isAuthenticated, login } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.location.pathname !== "/" &&
      !isAuthenticated &&
      !window.localStorage.getItem("isLoggedIn", "1")
    ) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      !isAuthenticated &&
      window.localStorage.getItem("isLoggedIn", "1")
    ) {
      navigate("/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<Backdrop />}>
      <Routes>
        <Route path="/" element={<Login onLogin={login} />} />
        <Route path="/main" element={<Main isLoggedIn={isAuthenticated} />} />
        <Route path="/input" element={<Input />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from "./component/scrollToTop";

import { Context } from "./store/appContext";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Game } from "./pages/game";
import { Private } from "./pages/private";
import { Presentation } from "./pages/presentation";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PageLoading from "./component/pageLoading";
import useAuth from "./hooks/useAuth";
import PrivateRoute from "./pages/privateRoute";
import 'react-toastify/dist/ReactToastify.css';

//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  const { setUserContext } = useAuth();
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const getUser = async () => {
    const token = localStorage.getItem("jwt-token");
    if (token && token !== "") {
      actions.storeToken(token);
      await setUserContext();
    } else {
      actions.setInitialized(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!store.isInitialized) return (<PageLoading />)

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            {/* private routes */}
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <Private />
                </PrivateRoute>
              }
            />
            {/* private routes */}
            <Route element={<Home />} path="/" />
            <Route element={<Search />} path="/search" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Presentation />} path="/presentation" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Game />} path="/game/:gameId" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

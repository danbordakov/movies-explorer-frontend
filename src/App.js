import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFoundError from "./components/NotFoundError/NotFoundError";
import Navigation from "./components/Navigation/Navigation";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Preloader from "./vendor/Preloader/Preloader";

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);


  
  function closeNavigation() {
    document.addEventListener("click", function(ev) {
      if (ev.target.className==="navigation__darkLayer navigation__darkLayer_visible") {
        setIsNavigationOpen(false);
      }
    })
    setIsNavigationOpen(false);
  }

  function openNavigation() {
    setIsNavigationOpen(true);
  }
  return (
    <div className='page'>
      {/* <Preloader /> */}
      <Navigation
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
      />
      <Header
        onOpenNavigation={openNavigation}
      />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route
          path="/profile"
          element={<Profile/>}
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ReviewFormPage from "./components/Reviews/ReviewFormPage";
import AllShoppingCartItems from "./components/ShoppingCart/AllShoppingCartItems";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/reviews">
            <ReviewFormPage />
          </Route>
          <ProtectedRoute path="/shopping_cart/current">
            <AllShoppingCartItems />
          </ProtectedRoute>
          {/* <ProtectedRoute path="/feed">
            <Feed /> // will check if there is a user logged in, otherwise will redirect you to log in. requires user to be authenticated to visit it
          </ProtectedRoute> */}
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;

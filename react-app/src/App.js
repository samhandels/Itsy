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
import { AllProducts } from "./components/AllProducts";
import UserReviewPage from "./components/Reviews/UserReviewPage"

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
          <Route exact path="/reviews">
            <ReviewFormPage />
          </Route>
          <Route path="/reviews/current">
            <UserReviewPage />
          </Route>
          <ProtectedRoute path="/shopping_cart/current">
            <AllShoppingCartItems />
          </ProtectedRoute>
          <Route exact path='/'>
            <AllProducts />
          </Route>
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

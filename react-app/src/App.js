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
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AllProducts } from "./components/AllProducts";
import UserReviewPage from "./components/Reviews/UserReviewPage";
import FavoritesPage from "./components/Favorites";
import { ProductDetails } from "./components/ProductDetails";
import { Store } from "./components/Store";
import { CreateProductForm } from "./components/ProductForm/CreateProductForm";

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
          <Route path="/login">
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
          <ProtectedRoute exact path="/products/new">
            <CreateProductForm />
          </ProtectedRoute>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <ProtectedRoute path="/favorites">
            <FavoritesPage />
          </ProtectedRoute>
          <ProtectedRoute path="/shopping_cart/current">
            <AllShoppingCartItems />
          </ProtectedRoute>
          <ProtectedRoute path="/store">
            <Store />
          </ProtectedRoute>
          <Route exact path="/">
            <AllProducts />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;

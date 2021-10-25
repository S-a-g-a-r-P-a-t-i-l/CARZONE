import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import  ProductDetails  from './component/Product/ProductDetails.js';
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js"
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
    <Header />
    {isAuthenticated && <UserOptions user={user} />}
    <Route exact path="/" component={Home} />
    <Route exact path="/product/:id" component={ProductDetails} />
    <Route exact path="/products" component={Products} />
    <Route path="/products/:keyword" component={Products} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/contact" component={Contact} />
<Route exact path="/about" component={About} />
    <ProtectedRoute exact path="/account" component={Profile} />
    <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
    <Route exact path="/login" component={LoginSignUp} />
    <Route exact path="/cart" component={Cart} />
    <ProtectedRoute exact path="/shipping" component={Shipping} />
    <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
    
    {stripeApiKey && (
    <Elements stripe={loadStripe(stripeApiKey)}>
      <ProtectedRoute exact path="/process/payment" component={Payment} />
    </Elements>
    )} 
    <Footer />
    </Router>
    );
}

export default App;

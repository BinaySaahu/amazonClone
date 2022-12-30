import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route} from 'react-router-dom';
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import PaymentPage from './pages/PaymentPage';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderPage from "./pages/OrderPage";
const promise = loadStripe('pk_test_51LRdGMSHvE1Ajub2joDHbioEO55qNtevuRhFB3tun0hzsUxvYMhAjU9cBwnbpe14txF5ikFSjFdOQqnZsuVs3WMx00iMhyYIlQ');
function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);

      if(authUser)
      {
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }
      else
      {
        dispatch({
          type:"SET_USER",
          user:null
        })
        
      }
    })
  },[]);
  return (
      <>
        <Routes>
          <Route path= '/' element = {<HomePage/>}/>
          <Route path= '/checkout' element = {<CheckoutPage/>}/>
          <Route path= '/login' element = {<LoginPage/>}/>
          <Route path= '/payment' element = {<Elements stripe={promise}><PaymentPage/></Elements>}/>
          <Route path= '/orders' element = {<OrderPage/>}/>
        </Routes>
      </>
  );
}

export default App;

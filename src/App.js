
import React, { lazy, Suspense, useEffect } from 'react';
import './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './container/layout/Layout.js'
import HomePage from './Pages/HomePage/HomePage';
// import ShopPage from './Pages/ShopPage/ShopPage';
import SingleRroductPage from './Pages/SingleProductPage/SingleRroductPage';
import { useDispatch } from 'react-redux';
import { ProductRequested } from './e-store/actions';
import CartPage from './Pages/CartPage/CartPage';
// import Login from './Pages/Auth/Login/Login';
// import Register from './Pages/Auth/Register/Register'
import Checkout from './Pages/Auth/Checkout/Checkout';
import Payment from './Pages/Auth/Payment/Payment';
import OrderPage from './Pages/Order/OrderPage';
import CommingSoon from './component/CommingSoon/CommingSoon';



function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductRequested());
  }, []);

  const lazyShop = lazy(()=> import('./Pages/ShopPage/ShopPage'));
  const lazyLogin = lazy(() => import('./Pages/Auth/Login/Login'));
  const lazyRegister = lazy(() => import('./Pages/Auth/Register/Register'));


  return (
    <div className="App">
      <Layout>

        <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/shipping" component={Checkout} />
          <Route path="/payment" component={Payment} />
          <Route path="/about" component={CommingSoon} />
          <Route path="/contact" component={CommingSoon} />
          <Route path="/place-order" component={OrderPage} />
          <Route path="/cart" component={CartPage} /> 
          <Route path="/single/:id" component={SingleRroductPage} />
          
          <Suspense fallback="Loading...">
            <Route path="/shop" component={lazyShop} />
            <Route path="/login" component={lazyLogin} />
            <Route path="/register" component={lazyRegister} />
          </Suspense>

          
          
          
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);

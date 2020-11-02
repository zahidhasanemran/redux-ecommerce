
import React, { lazy, Suspense, useEffect } from 'react';
import style from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './container/layout/Layout.js'
import HomePage from './Pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { ProductRequested } from './e-store/actions';
import CartPage from './Pages/CartPage/CartPage';
import Checkout from './Pages/Auth/Checkout/Checkout';
import Payment from './Pages/Auth/Payment/Payment';
import OrderPage from './Pages/Order/OrderPage';
import CommingSoon from './component/CommingSoon/CommingSoon';
import ShopPage from './Pages/ShopPage/ShopPage'
import Loading from './component/Loading/Loading';


function App({location}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductRequested());
  }, []);

  const lazyShop = lazy(()=> import('./Pages/ShopPage/ShopPage'));
  const lazyLogin = lazy(() => import('./Pages/Auth/Login/Login'));
  const lazyRegister = lazy(() => import('./Pages/Auth/Register/Register'));
  const lazySingleProduct = lazy(() => import('./Pages/SingleProductPage/SingleRroductPage'))


  return (
    <div className="App">
     
      <Layout>
        <Switch location={location}>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/shipping" exact component={Checkout} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/about" exact component={CommingSoon} />
          <Route path="/contact" exact component={CommingSoon} />
          <Route path="/place-order" exact component={OrderPage} />
          <Route path="/cart" exact component={CartPage} /> 
          <Route path="/shop" exact component={ShopPage} /> 
          <Route path="/loading" exact component={Loading} /> 
          
          <Suspense fallback={<Loading />}>
            {/* <Route path="/shop" exact component={lazyShop} /> */}
            <Route path="/login" exact component={lazyLogin} />
            <Route path="/register" exact component={lazyRegister} />
            <Route path="/single/:id" component={lazySingleProduct} />
          </Suspense>
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);

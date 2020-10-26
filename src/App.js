
import React, { useEffect } from 'react';
import './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './container/layout/Layout.js'
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingleRroductPage from './Pages/SingleProductPage/SingleRroductPage';
import { useDispatch } from 'react-redux';
import { ProductRequested } from './e-store/actions';
import CartPage from './Pages/CartPage/CartPage';
import Login from './Pages/Auth/Login/Login';


function App(props) {
  // const products = useSelector(state => state.ProductReducer.products);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductRequested());
  }, []);



  return (
    <div className="App">
      <Layout>

        <Switch>
          <Route path="/" exact component={HomePage} /> 
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={CartPage} />
          <Route path="/single/:id" component={SingleRroductPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);

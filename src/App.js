
import React, { useEffect } from 'react';
import './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './container/layout/Layout.js'
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingleRroductPage from './Pages/SingleProductPage/SingleRroductPage';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRequested } from './e-store/actions';


function App(props) {
  const products = useSelector(state => state.ProductReducer.products);
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
          <Route path="/single/:id" component={SingleRroductPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);

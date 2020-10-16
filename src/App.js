
import React from 'react';
import './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './container/layout/Layout.js'
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingleRroductPage from './Pages/SingleProductPage/SingleRroductPage';



function App() {
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

export default App;

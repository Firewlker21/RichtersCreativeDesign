import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import Nav from './Nav/Nav';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import ProductsRoute from './ProductsRoute';
import Admin from './Admin';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/Products' component={ProductsRoute} />
        <Route path='/admin' component={Admin} />
      </div>
    </Router>
  );
};

export default App;

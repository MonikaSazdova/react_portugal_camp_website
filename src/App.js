import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Gallery';
import Services from './components/pages/Services';
import Book from './components/pages/Book';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Products} />
          <Route path='/book' component={Book} />
        </Switch>
        <Footer/>
      </Router>
     
    </>
  );
}

export default App;

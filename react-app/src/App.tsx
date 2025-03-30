import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
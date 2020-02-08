import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/home';
import { Store } from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
  </Provider>
  );
}

export default App;

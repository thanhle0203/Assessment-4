//4. Create a route and navigation to show product component

import React from 'react';
import LifecycleComponent from "./components/LifeCycleComponent";
import { BrowserRouter as Router, Route, Navigate }  from 'react-router-dom';
import Product from './components/Product';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Navigate to="/">Product</Navigate>
          </li>
        </ul>
      </nav>
      <Route path='/product' component={Product} />
    </div>
  </Router>
)
  
export default App;

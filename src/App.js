import React from 'react';
import Navber from './Components/Navber';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navber />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;

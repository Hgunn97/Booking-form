import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Home'
import './main.css';
import Form from './Components/Form'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Home path='/' Component={Home} exact />
            <Form path='/form' Component={Form} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

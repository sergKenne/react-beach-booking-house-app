import React, { Component } from 'react';
import './styles/app.css'
import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import {RoomProvider} from './context';

class App extends Component {
  

  render() {
    return (
      <RoomProvider>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </>
      </RoomProvider>
    );
  }
}

export default App;

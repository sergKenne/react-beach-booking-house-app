import React, { Component } from 'react';
import './styles/app.css'
import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import {roomsContext} from './context';
import items from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
    };
  }

  componentDidMount() {
    let rooms =  this.formatItems(items);
    let featuredRooms = rooms.filter(room => room.featured === true)
    console.log(rooms);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms:rooms,
      loading: false
    });
  }

  formatItems(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => {
        return image.fields.file.url
      });
      let room = {...item.fields, id, images} 
      return room
    })

    return tempItems;
  }



  render() {
    return (
      <roomsContext.Provider value={this.state}>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </>
      </roomsContext.Provider>
    );
  }
}

export default App;

import React, { Component } from 'react'

export const roomsContext = React.createContext(); 
export const RoomConsumer = roomsContext.Consumer;
import items from './data'

export class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        };
    }

    componentDidMount() {

        let rooms = this.formatItems(items);
        let featuredRooms = rooms.filter(room => room.featured === true)
        this.setState(prevState => ({
            ...prevState,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false

        }), ()=>console.log("after:",rooms))
    }

    formatItems(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url;
            });
            let room = { ...item.fields, images, id }
            return room;
        });

        return tempItems;
    }

    render() {
        return (
            <roomsContext.Provider value={this.state}>
                {this.props.children}
            </roomsContext.Provider>
        )
    }
}



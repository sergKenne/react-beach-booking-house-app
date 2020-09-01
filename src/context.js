import React, { Component } from 'react'

export const roomsContext = React.createContext(); 
export const Consumer = roomsContext.Consumer;
import items from './data'

export class Provider extends Component {
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
                return image.fields.file.url
            });
            let room = { ...item.fields, id, images }
            return room
        })

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



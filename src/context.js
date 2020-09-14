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

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            maxPrice,
            breakfast,
            pets
        } = this.state;

        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        
        if( type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        // } else {
        //     tempRooms = tempRooms.filter(room => room.type === type);
        // }
        }

        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity === capacity);
        }

        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(
            room => (room.size >= minSize) && (room.size <= maxSize)
        );

        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }


        this.setState(prevState => ({
            ...prevState,
            sortedRooms: tempRooms
        }));

    }

    handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value
        }, () => this.filterRooms());       
    }

    componentDidMount() {

        let rooms = this.formatItems(items);
        let featuredRooms = rooms.filter(room => room.featured === true)

        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        
        let minSize = Math.min(...rooms.map(item => item.size));
        let minPrice = Math.min(...rooms.map(item => item.price));
        let price = Math.max(...rooms.map(item => item.price))
        

        this.setState(prevState => ({
            ...prevState,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            maxPrice,
            maxSize,
            minPrice,
            price,
            minSize

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
            <roomsContext.Provider value={{ 
                ...this.state, 
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </roomsContext.Provider>
        )
    }
}



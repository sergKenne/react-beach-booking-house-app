import React from 'react'
import RoomSearch from './RoomSearch'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
import Loading from './Loading'

const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {value => {
                const {loading, sortedRooms, rooms} = value;
                if(loading) {
                    return <Loading/>
                }
                return (
                    <>
                        <RoomSearch rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </>
                );
            }}
        </RoomConsumer>
    )
}

export default RoomsContainer

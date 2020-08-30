import React, {useContext} from 'react';
import {roomsContext} from '../context';
import Loading from './Loading'
import Title from './Title';
import Room from './Room';

const FeatureRooms = () => {
    const roomsData = useContext(roomsContext);
    const { rooms, featuredRooms, loading, sortedRooms } = roomsData;
    return (
        <section className="featured-rooms">
          <Title title="featured rooms"/>  
          <div className="featured-rooms-center">
            {
                loading ? <Loading/> : featuredRooms.map(item => {
                    return <Room key={item.id} room={item}/>
                })
            }
          </div>
        </section>
    )
}

export default FeatureRooms

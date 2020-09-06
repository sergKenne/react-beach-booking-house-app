import React from 'react';
import Loading from './Loading'
import Title from './Title';
import Room from './Room';
import { RoomConsumer } from '../context';

const FeatureRooms = () => {
    return (
        <section className="featured-rooms">
          <Title title="featured rooms"/>  
          <div className="featured-rooms-center">
            <RoomConsumer>
              {data => {
                console.log("data:", data.featuredRooms);
                return data.Loading ? <Loading /> : data.featuredRooms.map(item => {
                  return <Room key={item.id} room={item} />
                })
              }}
            </RoomConsumer>
          </div>
        </section>
    )
}

export default FeatureRooms

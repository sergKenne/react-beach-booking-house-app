import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import {Consumer} from '../context'
import Loading from '../components/Loading';

const SingleRoom = (props) => {
  
  return (
    <>
      <Consumer>
        {rooms => {
          const { slug } = props.match.params
          const room = rooms.rooms.find(item => item.slug = slug);
          if (room === undefined || Object.keys(room).length === 0) {
            return <Loading/>
          } else {
            const { description, price, size, capacity, pets, breakfast, extras } = room;
            return (
              <>
                <Hero hero="roomsHero">
                  <Banner title={`${slug} rooms`}>
                    <Link to="/rooms" className="btn-primary">
                      Back to rooms
                  </Link>
                  </Banner>
                </Hero>
                <section className="single-room">
                  <div className="single-room-images">
                    {room.images.map((image, index) => <img src={`../${image}`} key={index} alt={image.name} />).slice(0,3)}
                  </div>
                  <div className="single-room-info">
                    <article className="desc">
                      <h3>details</h3>
                      <p>{room.description}</p>
                    </article>
                    <article className="info">
                      <h3>info</h3>
                      <h6>price: ${room.price}</h6>
                      <h6>size : ${room.size} SQFT</h6>
                      <h6>
                        max capacity: {" "} {room.capacity > 1 ? `${room.capacity} people` :
                          `${room.capacity} person `}
                      </h6>
                      <h6>{room.pets ? "pets allows" : "no pets allows"}</h6>
                      <h6>{room.breakfast && " free breakfast included"}</h6>
                    </article>
                  </div>
                </section>
                <section className="room-extras">
                  <h6>extras</h6>
                  <ul className="extras">
                    {room.extras.map((item, index) => {
                      return <li key={index}>- {item}</li>;
                    })}
                  </ul>
                </section>
              </>
            )
          }
        }} 
      </Consumer>
    </>
  );
};

export default SingleRoom;
import React from 'react';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import {RoomConsumer} from '../context'
import Loading from '../components/Loading';
import StyledHero from '../components/StyledHero';

const SingleRoom = (props) => {
  
  return (
    <>
      <RoomConsumer>
        {rooms => {
          const { slug } = props.match.params;
          const room = rooms.rooms.find(item => item.slug === slug);
          console.log("Room:", room);
          
          if (room === undefined || Object.keys(room).length === 0) {
            return <Loading/>
          } else {
            const { description, price, size, capacity, pets, breakfast, extras, images } = room;
            console.log("singleImage:", images[0]);
            return (
              <>
                <StyledHero img={`../${images[0]}`}>
                  <Banner title={`${slug} rooms`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                  </Banner>
                </StyledHero>
                <section className="single-room">
                  <div className="single-room-images">
                    {images.map((image, index) => <img src={`../${image}`} key={index} alt={image.name} />).slice(0)}
                  </div>
                  <div className="single-room-info">
                    <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                    </article>
                    <article className="info">
                      <h3>info</h3>
                      <h6>price: ${price}</h6>
                      <h6>size : ${size} SQFT</h6>
                      <h6>
                        max capacity: {" "} {capacity > 1 ? `${capacity} people` :
                          `${capacity} person `}
                      </h6>
                      <h6>{pets ? "pets allows" : "no pets allows"}</h6>
                      <h6>{breakfast && " free breakfast included"}</h6>
                    </article>
                  </div>
                </section>
                <section className="room-extras">
                  <h6>extras</h6>
                  <ul className="extras">
                    {extras.map((item, index) => {
                      return <li key={index}>- {item}</li>;
                    })}
                  </ul>
                </section>
              </>
            )
          }
        }} 
      </RoomConsumer>
    </>
  );
};

export default SingleRoom;
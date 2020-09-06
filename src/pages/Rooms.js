import React from 'react';
import roomsHero from '../images/room-2.jpeg'
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
import StyledHero from '../components/StyledHero'


const Rooms = () => {
    return (
      <>
        <StyledHero img={`../${roomsHero}`}>
            <Banner title="our rooms">
            <Link to="/" className="btn-primary">
                return home
            </Link>
            </Banner>
        </StyledHero>
        <RoomsContainer/>
      </> 
    );
}

export default Rooms

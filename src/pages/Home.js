import React from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';
import StyledHero from '../components/StyledHero'
const Home = () => {
  return (
    <>  
        <StyledHero img={`../${defaultBcg}`}>
            <Banner 
                title="Luxurious Rooms"
                subtitle="deluxe rooms starting at $299"
            >
                <Link to="/rooms" className="btn-primary">
                    our Rooms
                </Link>
            </Banner>
        </StyledHero>
        <Services/>
        <FeatureRooms/>
    </>
   ) 
};

export default Home;

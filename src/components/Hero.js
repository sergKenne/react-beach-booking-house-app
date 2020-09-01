import React from 'react'
//import defaultBcg from '../images/defaultBcg.jpeg';

const Hero = ({children, hero}) => {

    return <header className={hero}>{children}</header>;
}

export default Hero

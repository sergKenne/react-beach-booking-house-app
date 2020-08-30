import React, {useState} from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const dataServices = [
  {
    icon: <FaCocktail />,
    title: 'free Cocktails',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi.',
  },
  {
    icon: <FaHiking/>,
    title: 'Endless HiKing',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi.',
  },
  {
    icon: <FaShuttleVan />,
    title: 'free Shuttle',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi.',
  },
  {
    icon: <FaBeer />,
    title: 'Strongest Beer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, commodi.',
  },
];

const Services = () => {
    const[services,setService] = useState(dataServices)
    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((service, index) =>{
                    return (
                        <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Services

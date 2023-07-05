import React, {useState, useContext} from 'react'
import {RoomConsumer} from '../context';
import Title from './Title';


const getUniqueTypeValue = (rooms, type) => {
    const arrType = rooms.map(item => item[type]).reduce((acc, curr) => {
        if(acc.find(item => item === curr )) {
            return acc;
        } else {
            return [...acc, curr]
        }
    }, ["all"])
    return arrType;
}


const RoomsSearch = ({rooms}) => {
    console.log("searchRoom:", rooms);

    return (
        <RoomConsumer>
            { value => {
                const  {
                    handleChange, 
                    type, 
                    capacity, 
                    price, 
                    minPrice, 
                    maxPrice, 
                    minSize,
                    maxSize, 
                    breakfast, 
                    pets } = value;


                return (
                    <section className="filter-container">
                       <Title title="search rooms"/> 
                       <form className="filter-form">
                            <div className="form-group">
                                <label htmlFor="type">room type</label>
                                <select 
                                    name="type" 
                                    id="type"
                                    value={type}
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    {getUniqueTypeValue(rooms, "type").map((item,ind)=>{
                                        return <option key={ind} value={item}>{item}</option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="capacity">Guests</label>
                                <select
                                    name="capacity"
                                    id="capacity"
                                    value={capacity}
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    {getUniqueTypeValue(rooms, "capacity").slice(1).map((item, ind) => {
                                        return <option key={ind} value={item}>{item}</option>
                                    })}
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="price">room price ${price}</label>
                                <input 
                                    type="range" 
                                    name="price" 
                                    min={minPrice}
                                    max={maxPrice} 
                                    id="price" 
                                    value={price} 
                                    onChange={handleChange} 
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">room size </label>
                                <div className="size-inputs">
                                    <input
                                        type="number"
                                        name="minSize"
                                        value={minSize}
                                        min={minSize}
                                        onChange={handleChange}
                                        className="size-input"
                                    />
                                    <input
                                        type="number"
                                        name="maxSize"
                                        value={maxSize}
                                        onChange={handleChange}
                                        className="size-input"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="single-extra">
                                    <input
                                        type="checkbox"
                                        name="breakfast"
                                        id="breakfast"
                                        checked={breakfast}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="breakfast">breakfast</label>
                                </div>
                                <div className="single-extra">
                                    <input
                                        type="checkbox"
                                        name="pets"
                                        id="pets"
                                        checked={pets}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="pets">pets</label>
                                </div>
                            </div>
                       </form>
                    </section>
                )
            }}
        </RoomConsumer>
    )
}

export default RoomsSearch

"use client"

import React from 'react';
import { listOfButtons } from '../../data/seed'
import NavbarButton from '../navbar/NavbarButton'

const Navbar = () => {

    const circleDegress = 360
    const numberOfButtons =  circleDegress / listOfButtons.length;

    return (
        <div className='fixed w-full h-screen flex items-center justify-center z-50'>
            <div className= 'flex items-center justify-inbetween relative animate-spin'>
                {   
                    listOfButtons.map((button, index) => {
                        const buttonDirection = (index * numberOfButtons * Math.PI) / 180;
                        const circleRadius = 'calc(20vw - 2rem)';
                        const xCoordinate = `calc(${circleRadius} * ${Math.cos(buttonDirection)})`;
                        const yCoordinate = `calc(${circleRadius} * ${Math.sin(buttonDirection)})`;
                        return <NavbarButton key = {index} xCoordinate = {xCoordinate} yCoordinate = {yCoordinate} {...button}/>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
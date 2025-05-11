"use client"

import React from 'react';
import { listOfButtons } from '../../data/seed'
import NavbarButton from '../navbar/NavbarButton'

const Navbar = () => {

    const circleDegress = 360
    const numberOfButtons =  circleDegress / listOfButtons.length;

    return (
        <div className='fixed w-full h-screen flex items-center justify-center'>
            <div className= 'flex items-center justify-inbetween relative'>
                {   
                    listOfButtons.map((button, index) => {
                        const buttonDirection = (index * numberOfButtons * Math.PI) / 180;
                        const circleRadius = 'calc(20vw - 1rem)';
                        const xCoordinate = `calc(${circleRadius} * ${Math.cos(buttonDirection)})`;
                        const yCoordinate = `calc(${circleRadius} * ${Math.sin(buttonDirection)})`;
                        return <NavbarButton key = {button.key} xCoordinate = {xCoordinate} yCoordinate = {yCoordinate} {...button}/>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
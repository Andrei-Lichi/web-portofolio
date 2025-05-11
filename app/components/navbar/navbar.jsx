"use client"

import React from 'react';
import { listOfButtons } from '../../data/seed'

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
                        const buttonXCoordinate = `calc(${circleRadius} * ${Math.cos(buttonDirection)})`;
                        const buttonYCoordinate = `calc(${circleRadius} * ${Math.sin(buttonDirection)})`;
                        return <button key = {index} className='absolute' style={{transform: `translate(${buttonXCoordinate}, ${buttonYCoordinate})`}}> {button.label} </button>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
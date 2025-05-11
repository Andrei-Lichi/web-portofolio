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
                        const buttonPosition = (index * numberOfButtons * Math.PI) / 180;
                        const circleRadius = 'calc(20vw - 1rem)';
                        const x = `calc(${circleRadius} * ${Math.cos(buttonPosition)})`;
                        const y = `calc(${circleRadius} * ${Math.sin(buttonPosition)})`;
                        return <button key = {index} className='absolute' style={{transform: `translate(${x}, ${y})`}}> {button.label} </button>
                    })
                }
            </div>
        </div>
    )
}

export default Navbar;
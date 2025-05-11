import React from 'react'

const NavbarButton = ({buttonXCoordinate, buttonYCoordinate, label, link, icon, newTab}) => {
  return (
    <div className = 'absolute cursor-pointer z-50' style = {{ transform: `translate(${buttonXCoordinate} , ${buttonYCoordinate})`}}>
      {label}
    </div>
  )
}
 
export default NavbarButton

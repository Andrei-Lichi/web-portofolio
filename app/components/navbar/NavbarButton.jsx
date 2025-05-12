import Link from 'next/link'
import React from 'react'

const getIcon = (icon) => {
  const iconPaths = {
    home: 'audio/A.png',
    about: 'audio/B.png',
    projects: 'audio/C.png',
    contact: 'audio/D.png',
    resume: 'audio/E.png',
    github: 'audio/F.png',
    linkedin: 'audio/G.png',
    X: 'audio/H.png',
  }

  const iconPath = iconPaths[icon];
  return <img src={iconPath} alt={icon} className="w-full h-auto "/>;
}

const NavbarButton = ( {xCoordinate, yCoordinate, label, link, icon, newTab} ) => {
  return (
<div className='absolute top-1/2 left-1/2 cursor-pointer' style={{ transform: `translate(-50%, -50%) translate(${xCoordinate}, ${yCoordinate})` }}>
      <Link 
        className = 'group rounded-full flex shadow-glass-inset hover:shadow-glass-sm' 
        href = {link} 
        target = {newTab ? '_blank' : '_self'}
        name = {label} 
        aria-label = {label}
      >
        <span className='relative w-23 h-23 rounded-full backdrop-blur-[1px] animate-spin-reverse group-hover:text-accent menu-icon '>
          { getIcon(icon) }
        </span>
      </Link>
    </div>
  )
}
 
export default NavbarButton

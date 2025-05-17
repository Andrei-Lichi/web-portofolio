import Link from 'next/link'
import React from 'react'

const getIcon = (icon) => {
  const iconPaths = {
    home: 'icons/witcherIcons/A.png',
    about: 'icons/witcherIcons/B.png',
    projects: 'icons/witcherIcons/C.png',
    contact: 'icons/witcherIcons/D.png',
    resume: 'icons/witcherIcons/E.png',
    github: 'icons/witcherIcons/F.png',
    linkedin: 'icons/witcherIcons/G.png',
    X: 'icons/witcherIcons/H.png',
  }

  const iconPath = iconPaths[icon];
  return <img src={iconPath} alt={icon} className="w-full h-auto "/>;
}

const NavbarButton = ( {xCoordinate, yCoordinate, label, link, icon, newTab} ) => {
  return (
<div className='absolute top-1/2 left-1/2 cursor-pointer' style={{ transform: `translate(-50%, -50%) translate(${xCoordinate}, ${yCoordinate})` }}>
      <Link 
        className = 'buttonHover rounded-full flex shadow-glass-inset hover:shadow-glass-sm' 
        href = {link} 
        target = {newTab ? '_blank' : '_self'}
        name = {label} 
        aria-label = {label}
      >
        <span className='relative w-23 h-23 p-2 border icon-border rounded-full backdrop-blur-[5px] animate-spin-reverse menu-icon '>
          { getIcon(icon) }
          <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'></span>
          <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-labelBackground text-foreground text-sm rounded--md shadow-lg whispace-nowrap font-witcher'>
            {label}
          </span>
        </span>
      </Link>
    </div>
  )
}
 
export default NavbarButton

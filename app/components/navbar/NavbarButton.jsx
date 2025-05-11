import Link from 'next/link'
import React from 'react'
import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User, X } from 'lucide-react'

const getIcon = (icon) => {
  switch(icon) {
    case "home":
      return <Home className = 'w-full h-auto' strokeWidth = {1.5} />
    case "about":
      return <User className = 'w-full h-auto' strokeWidth = {1.5} />
    case "projects":
      return <Palette className = 'w-full h-auto' strokeWidth = {1.5} />
    case "contact":
      return <Phone className = 'w-full h-auto' strokeWidth = {1.5} />
    case "github":
      return <Github className = 'w-full h-auto' strokeWidth = {1.5} />
    case "linedin":
      return <Linkedin className = 'w-full h-auto' strokeWidth = {1.5} />
    case "X":
      return <X className = 'w-full h-auto' strokeWidth = {1.5} />
    case "resume":
      return <NotebookText className = 'w-full h-auto' strokeWidth = {1.5} />
    default:
      return <Home className = 'w-full h-auto' strokeWidth = {1.5} />
  }
}

const NavbarButton = ( {xCoordinate, yCoordinate, label, link, icon, newTab} ) => {
  return (
<div className='absolute top-1/2 left-1/2 cursor-pointer' style={{ transform: `translate(-50%, -50%) translate(${xCoordinate}, ${yCoordinate})` }}>
      <Link 
        className = 'rounded-full flex border backdrop-blur-[5px] shadow-glass-inset hover:shadow-glass-sm' 
        href = {link} 
        target = {newTab ? '_blank' : '_self'}
        name = {label} 
        aria-label = {label}
      >
        <span className='relative w-14 h-14 p-4 animate-spin-reverse'>
          { getIcon(icon) }
        </span>
      </Link>
    </div>
  )
}
 
export default NavbarButton

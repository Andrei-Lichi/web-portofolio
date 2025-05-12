"use client"

import React, {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { createPortal } from 'react-dom'

const BackgroundMusic = () => {

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const musicConsent = "musicConsent";
  const userEvents = ["click", "keydown", "touchstart"];
  const hasConsent = () => localStorage.getItem(musicConsent) === "true";
  
  const Modal = ({onClose, toggle}) => {
    return createPortal(
      <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-3'>
        <div className='border border-solid py-8 px-6 xs:px-10 sm:px-16 rounded text-center space-y-8'>
         <p className='font-light'> Do you like to play blackground music?  </p>
         <p className='font-light '>- Everytime You Leave (The Witcher) by Sonya Ostinelli - </p>
         <div className='flex items-center justify-center space-x-4'>
          <button onClick = {toggle} className='px-4 py-2 border border-solid rounded mr-2'> Yes </button>
          <button onClick = {onClose} className='px-4 py-2 border border-solid rounded'> No </button>
         </div>
        </div>
      </div>,
      document.getElementById('my-modal')
    )
  }

  const handleFirstUserInteraction = () => {
    if(hasConsent() && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true)
    }

    userEvents.forEach((event) => 
      document.removeEventListener(event, handleFirstUserInteraction)
    )
  }

  useEffect(() => {
    if (hasConsent()) {
      setIsPlaying(true)
        userEvents.forEach((event) => 
        document.addEventListener(event, handleFirstUserInteraction)
        )
    } else {
      setShowModal(true);
    }
  }, [])

  const toggle = () => {
    setIsPlaying(!isPlaying);
    !isPlaying ? audioRef.current.play() : audioRef.current.pause()
    localStorage.setItem(musicConsent, String(!isPlaying))
    setShowModal(false);
  }

  return (
    <div className='fixed top-4 right-4 xs:right-4 z-2 group rounded-full'>

      { showModal && <Modal onClose={() => setShowModal(false)} toggle = {toggle} /> }
     
      <audio ref = {audioRef} loop>
        <source src = {"./audio/EveryTimeYouLeave.mp3"} type= "audio/mpeg" />
        Audio not supported 
      </audio>

      <motion.button
      onClick = {toggle}
      initial = {{scale:0}}
      animate = {{scale:1}}
      transition = {{delay: 1}}
      className = "w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 border icon-border"
      aria-label = {"home"}
      name = {"home"}
      >
      {
        isPlaying? <Volume2 className = "w-full h-full text-foreground group-hover:text-accent" strokeWidth = {1.5}></Volume2> 
          :  <VolumeX className = "w-full h-full text-foreground group-hover:text-accent" strokeWidth = {1.5}></VolumeX> 
      }
      </motion.button>

    </div>
  )
}

export default BackgroundMusic

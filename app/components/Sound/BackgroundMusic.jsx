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
  const consentTime = "consentTime";
  const userEvents = ["click", "keydown", "touchstart"];
  const hasConsent = () => localStorage.getItem(musicConsent) === "true";

  
  const Modal = ({onClose, toggle}) => {
    return createPortal(
      <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-3'>
        <div className='border border-solid py-8 rounded-lg px-6 xs:px-10 sm:px-16 text-center space-y-4 bg-musicPopup'>
          <div className="flex justify-center items-center">
            <img src="/images/Witcher3Logo.png" alt="Logo" className="max-w-60 h-auto rounded" />
          </div>
          <p className='font-light font-witcher text-2xl'> Lichi's portfolio</p>
          <p className='font-light font-witcher'> Do you like to play blackground music?  </p>
          <p className='font-light font-witcher'>- Everytime You Leave by Sonya Ostinelli - </p>
          <div className='flex items-center justify-center space-x-4 mt-8'>
            <button onClick={toggle} className='px-4 py-2 border border-solid rounded mr-2 font-witcher bg-musicPopupButon cursor-pointer hover:popup-button-hover-effect'> Yes </button>
            <button onClick={onClose} className='px-4 py-2 border border-solid rounded font-witcher bg-musicPopupButon cursor-pointer hover:popup-button-hover-effect'> No </button>
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
    const consentTimeIsValid = localStorage.getItem("consentTime")
    const consentTimestamp = consentTimeIsValid ? new Date(consentTimeIsValid).getTime() : null;
    const oneDayInMs = 1 * 24 * 60 * 60 * 1000;
    const currentTime = new Date();

    if (hasConsent() && consentTimeIsValid && consentTimestamp + oneDayInMs > currentTime) {
        setIsPlaying(true);
        userEvents.forEach((event) => document.addEventListener(event, handleFirstUserInteraction))

    } else {
      setShowModal(true);
    }
  }, [])

  const toggle = () => {
    setIsPlaying(!isPlaying);
    !isPlaying ? audioRef.current.play() : audioRef.current.pause()
    localStorage.setItem(musicConsent, String(!isPlaying))
    localStorage.setItem(consentTime, new Date().toISOString());
    setShowModal(false);
  }

  return (
    <div className='fixed top-4 right-4 xs:right-4 z-2 rounded-full soundGroup'>

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
      className = "w-10 h-10 xs:w-14 xs:h-14 text-foreground bg-musicIcon rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 border icon-border"
      aria-label = {"home"}
      name = {"home"}>

      {
        isPlaying? <Volume2 className = "w-full h-full text-foreground " strokeWidth = {1.5}></Volume2> 
          :  <VolumeX className = "w-full h-full text-foreground " strokeWidth = {1.5}></VolumeX> 
      }
      </motion.button>

    </div>
  )
}

export default BackgroundMusic

"use client"

import Image from "next/image"
import background from "../public/images/mainBackground.jpg"
import RenderModel from "./components/models/RenderModel"
import WitcherMedallionModel from "./components/models/WitcherMedallion"
import Navbar from "./components/navbar/Navbar"
import ParticlesBackground from "./components/particles/ParticlesBackground"
import BackgroundMusic from "./components/Sound/BackgroundMusic"

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <div className="absolute inset-0">
        <Image
          src={background}
          fill
          alt="background image"
          className="object-cover object-center opacity-95"
        />
      </div> 
      
      <ParticlesBackground/>
      <BackgroundMusic/>

      <div id ="my-modal"/>

      <div className="w-full h-screen absolute">
        <Navbar/>
        <RenderModel><WitcherMedallionModel/></RenderModel>
      </div>

    </main>
  )
}

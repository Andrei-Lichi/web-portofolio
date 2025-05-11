"use client"

import Image from "next/image"
import background from "../public/background/mainBackground.jpg"
import RenderModel from "./components/models/RenderModel"
import WitcherMedallionModel from "../app/components/models/Witcher_medallion2"
import Navbar from "./components/navbar/Navbar"

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <div className="absolute inset-0">
        <Image
          src={background}
          fill
          alt="background image"
          className="object-cover object-center opacity-75"
        />
      </div> 
      
      <div className="w-full h-screen relative">
        <Navbar/>
        <RenderModel><WitcherMedallionModel/></RenderModel>
      </div>

    </main>
  )
}

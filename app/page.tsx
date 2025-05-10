"use client"

import Image from "next/image"
import background from "../public/background/mainBackground.jpg"
import RenderModel from "../app/components/RenderModel"
import WitcherMedallionModel from "../app/components/models/Witcher_medallion2"

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <Image src={background} fill alt="background image" className="w-full h-full object-cover object-center opacity-75"/>
 
      <div className="w-full h-screen">
        <RenderModel >
          <WitcherMedallionModel/>
        </RenderModel>
      </div>

    </main>
  )
}

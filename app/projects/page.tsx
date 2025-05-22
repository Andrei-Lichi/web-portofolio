"use client"

import Image from "next/image"
import background from "../../public/images/mainBackground.jpg"
import ProjectList from "../components/projects/ProjectList"
import {projectsData} from "../data/seed"
import ParticlesBackground from "../components/particles/ParticlesBackground"
import BackgroundMusic from "../components/sound/BackgroundMusic"

export default function Projects() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

    <div className="absolute inset-0 -z-10">
      <Image src={background} fill alt="background image" className="object-cover object-center opacity-95"/>
    </div> 
    
    <div className="mx-auto ">
      <ProjectList projects = {projectsData}/>
    </div>

    </main>
  )
}

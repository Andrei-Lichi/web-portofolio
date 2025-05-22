import React from 'react'
import ProjectLayout from "../projects/ProjectLayout"

const ProjectList = ({projects}) => {
  return (
    <div className="flex flex-col space-y-20"> 
      {projects?.map((project, index) => {
        return <ProjectLayout key={index} {...project} />
      })}
    </div>
  )
}

export default ProjectList

import React from 'react'

const ProjectLayout = ({name, description, date, link}) => {
  return (
    <div className='flex items-center justify-inbetween w-fll relative rounded-lg overflow-hidden p-6 border backdrop-blur-[5px] buttonHover shadow-glass-inset hover:shadow-glass-sm v'>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='font-witcher'>{name}</h2>
            <p className='font-witcher'>{description}</p>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'/>
        <p className='font-witcher'> {new Date(date).toDateString()}</p>
    </div>
  )
}


export default ProjectLayout

import React from 'react'
import Service from './Service'
const Services = () => {
  return (
    <div className="grid text-white-2 sm:grid-cols-2 gap-8 lg:gap-16">
        <Service title="Web development" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="01"
         url='/web-app'
        />
        <Service title="UI/UX design" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="02"
        url='/ui-ux'
        />
        <Service title="Embaded system / IoT" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="03"
         url='/iot'
        />
        <Service title="Mobile App" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="04"
         url='/mobile-app'
        />
    </div>
  )
}

export default Services
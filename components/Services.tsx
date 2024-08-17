import React from 'react'
import Service from './Service'
const Services = () => {
  return (
    <div className="grid text-white-2 sm:grid-cols-2 gap-8 lg:gap-16">
        <Service title="Web development" 
        description=' I’m proficient in both front-end and back-end development, allowing me to build comprehensive, end-to-end web solutions.'
        number="01"
         url='/web-app'
        />
        {/* <Service title="UI/UX design" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="02"
        url='/ui-ux'
        /> */}
        <Service title="Embaded system / IoT" 
        description='I offer complete IoT development services, from connecting sensors and devices to the cloud, to developing applications that allow for real-time data monitoring, control, and analytics.'
        number="02"
         url='/iot'
        />
        <Service title="Mobile App" 
        description=' I offer comprehensive mobile app development services, from initial concept and design to deployment and ongoing support.'
        number="03"
         url='/mobile-app'
        />
    </div>
  )
}

export default Services
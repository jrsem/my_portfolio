import React from 'react'

const Experience = ({role,year,enterprise: enterprise,localization}:{year:string, role:string ,enterprise?:string,localization:string}) => {
  return (
    <div className="bg-black-2 rounded-md p-4">
        <h1 className="text-secondColor text-14">{year}</h1>
        <h1 className="text-14">{role}</h1>
        <p className="text-white-3 text-12">{enterprise}</p>
        <p className="text-secondColor text-10">{localization}</p>
    </div>
  )
}

export default Experience
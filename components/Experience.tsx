import React from 'react'

const Experience = ({role,year,enterprise: enterprise,localization}:{year:string, role:string ,enterprise?:string,localization:string}) => {
  return (
    <div className="bg-black-2 rounded-md p-4">
        <h1 className="text-secondColor">{year}</h1>
        <h1 className="">{role}</h1>
        <p className="text-white-3 text-[10px]">{enterprise}</p>
        <p className="text-secondColor text-[10px]">{localization}</p>
    </div>
  )
}

export default Experience
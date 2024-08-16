import Link from 'next/link'
import React from 'react'

const Experience = ({role,year,enterprise: enterprise,localization,url}:{url?:string,year:string, role:string ,enterprise?:string,localization:string}) => {
  return (
    <div className="bg-black-2 rounded-md p-4">
        <h1 className="text-secondColor text-14">{year}</h1>
        <h1 className="text-14">{role}</h1>
        <div className="flex gap-1">
          <p className="text-white-3 text-10">{enterprise}</p>
          <span><Link href={url ? url : ''} className="text-secondColor text-12">Link</Link></span>  
        </div>
        
        <p className="text-secondColor text-10 mt-2">{localization}</p>
    </div>
  )
}

export default Experience
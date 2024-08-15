import React from 'react'

const Education = ({title,year,description,localization}:{year:string, title:string ,description:string,localization:string}) => {
  return (
    <div className="bg-black-2 rounded-md p-4">
        <h1 className="text-secondColor font-bold">{year}</h1>
        <h1 className="font-bold">{title}</h1>
        <p className="text-white-3">{description}</p>
        <p className="text-secondColor text-[12px]">{localization}</p>
    </div>
  )
}

export default Education
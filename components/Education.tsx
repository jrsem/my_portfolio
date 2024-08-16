import Link from 'next/link'
import React from 'react'

const Education = ({title,year,description,localization,url}:{year:string,url:string, title:string ,description:string,localization:string}) => {
  return (
    <div className="bg-black-2 rounded-md p-4">
        <h1 className="text-secondColor font-bold test-14">{year}</h1>
        <h1 className="font-bold test-14">{title}</h1>
        <div className="flex gap-1">
          <p className="text-white-3 text-12">{description}</p>
          <Link href={url} className="text-secondColor text-12">Link</Link>
        </div>
        <p className="text-secondColor text-10">{localization}</p>
    </div>
  )
}

export default Education
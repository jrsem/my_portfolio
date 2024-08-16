import React from 'react'
import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';
const Service = ({ title,description,number,url}:{url:string,title:string,description:string,number:string}) => {
  return (
    <div className="border-b border-b-white-2 pb-2">
      <div>
        <div className="flex justify-between">
          <p className="text-white-1 text-4xl font-bold">{number}</p>
          <Link href={url} className="rounded-full bg-white-1 p-2 cursor-pointer">
            <ArrowDownRight className='text-secondColor'/>
          </Link>
          
          
        </div>
        <h1 className="text-secondColor font-bold text-14 ">{title}</h1>
        <p className="text-12">{description}</p>
      </div>
    </div>
  )
}

export default Service
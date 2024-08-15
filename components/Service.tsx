import React from 'react'
import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react';
const Service = ({ title,description,number}:{title:string,description:string,number:string}) => {
  return (
    <div className="border-b border-b-white-2 pb-2">
      <div>
        <div className="flex justify-between">
          <p className="hover:text-secondColor text-4xl text-white-1 font-bold">{number}</p>
          <div className="rounded-full bg-white-1 p-2 cursor-pointer hover:bg-white-3">
            {/* <Image
                src='/linkedin.svg'
                width={10}
                height={10}
                alt='github'
                className="text-center w-[24px] h-[24px]"
                /> */}
                <ArrowDownRight className='text-secondColor'/>
        </div>
        </div>
        <h1 className="hover:text-secondColor font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Service
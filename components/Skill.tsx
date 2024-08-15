import React from 'react'
import Image from 'next/image'
const Skill = ({url}:{url:string}) => {
  return (
    <div className="rounded-md bg-black-2 p-4 flex justify-center items-center w-20">
        <Image
        src={url}
        width={24}
        height={24}
        alt="icons"
        />
    </div>
  )
}

export default Skill
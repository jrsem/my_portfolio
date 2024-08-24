"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react';
import {Link , usePathname} from'@/navigation'
import {useTranslations, useLocale} from 'next-intl' 
import { motion } from "framer-motion"
const Service = ({ title,description,number,url}:{url:string,title:string,description:string,number:string}) => {
  // const pathname=usePathname()
  const locale=useLocale()
  return (
    <motion.div 
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}} 
        transition={{duration:1.5}}
        className="border-b border-b-white-2 pb-2">
      <div>
        <div className="flex justify-between">
          <p className="text-white-1 text-4xl font-bold">{number}</p>
          {/* <Link href={`/services/${url}`} className="rounded-full bg-white-1 p-2 cursor-pointer"> */}
          <div  className="rounded-full bg-white-1 p-2">
            <ArrowDownRight className='text-secondColor'/>
            </div>
          {/* </Link> */}
          
          
        </div>
        <h1 className="text-secondColor font-bold text-14 ">{title}</h1>
        <p className="text-12">{description}</p>
      </div>
    </motion.div>
  )
}

export default Service
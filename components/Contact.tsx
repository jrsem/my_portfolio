"use client"
import React from 'react'
import Form from '@/components/Form'
import {useTranslations} from 'next-intl' 
import {Mail,Phone,MapPinCheckInside} from 'lucide-react'
import { motion } from "framer-motion"
const Contact = () => {
    const t=useTranslations('contactPage');
  return (
    <div className=" flex flex-col md:grid-x-1-5 gap-10 justify-center items-center">
        <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}} 
        transition={{duration:1.5}}
        className="md:span-x-3 p-4 rounded-md bg-black-5">
            <h1 className="text-30 text-secondColor mb-2">{t("form_title")}</h1>
            {/* <p className="text-white-2 text-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus?</p> */}
            <Form/>
        </motion.div>
        <motion.div 
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}} 
            transition={{duration:2}}
            className="md:span-x-2 text-white-1 space-y-4 text-12">
           
                <div className="flex gap-4 justify-start items-center">
                    <div className="rounded-sm p-4 bg-black-2"> 
                        <Phone className='text-secondColor'/>
                    </div>
                    <span>
                        <p className="text-white-3">{t("phone")}</p>
                        <p>+(509) 3362-6238 | +(509) 3440-2005</p>
                    </span>
                    
                </div>
                <div className="flex gap-4 justify-start items-center">
                    <div className="rounded-sm p-4 bg-black-2"> 
                        <Mail className='text-secondColor'/>
                    </div>
                    <span>
                        <p className="text-white-3">{t("email")}</p>
                        <p>juniorsemerzier@gmail.com</p>
                    </span>
                    
                </div>
                <div className="flex gap-4 justify-start items-center">
                    <div className="rounded-sm p-4 bg-black-2"> 
                        <MapPinCheckInside className='text-secondColor'/>
                    </div>
                    <span>
                        <p className="text-white-3">{t("address")}</p>
                        <p>Port-au-prince, Haiti</p>
                    </span>
                    
                </div>
      
        </motion.div>
    </div>
  )
}

export default Contact
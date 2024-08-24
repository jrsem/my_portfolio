"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import junior from '@/public/junior.jpg'
import AnimatedCounter from './AnimatedCounter';
import {useTranslations} from 'next-intl' 
import Link from 'next/link';
import { motion } from "framer-motion"
import {downloadPDF} from '@/lib/utils'
const About = () => {

    const resumeClick = (e:any) => {
        e.preventDefault();
        // Use an absolute path from the root
        downloadPDF("/resume.pdf", "Junior_semerzier_CV.pdf");
      };

    const t=useTranslations('HomePage');
  return (
    <div className="">
    <div className="text-white-1 grid md:grid-cols-2 gap-4">
        <motion.div 
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}} 
            transition={{duration:1.5}}
            className="flex justify-center flex-col">
            <p className="text-white-2">{t("profession_1")} | {t("profession_2")}</p>
            <h1 className="text-4xl">{t("presentation_1")}</h1>
            <h1 className="text-secondColor text-4xl mb-4">{t("presentation_2")}</h1>
            <p className="mb-6 text-justify text-12">
            {t("presentation_text")}
            </p>
        
           <div className="grid gap-6 sm:grid-cols-2 sm:my-6 md:grid-cols-1 lg:grid-cols-2">
                <Button
                    type='button'
                    title={t("download_cv")}
                    variant='md:px-3md:py-1 text-secondColor p-2 sm:py-0 md:py-3 hover:bg-white-1'
                    icon='/download.svg'
                    onClick={resumeClick}
                    />
                <div className="flex justify-center gap-6 px-2 sm:px-14 lg:px-0">
                    <Link href="https://github.com/jrsem">
                        <div className="rounded-full bg-black-2 p-3 cursor-pointer hover:bg-white-1">
                            <Image
                            src='/github.svg'
                            width={15}
                            height={15}
                            alt='github'
                            className="text-center w-[24px] h-[24px]"
                            />
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/junior-semerzier/">
                        <div className="rounded-full bg-black-2 p-3 cursor-pointer hover:bg-white-1">
                            <Image
                                src='/linkedin.svg'
                                width={15}
                                height={15}
                                alt='github'
                            className="text-center w-[24px] h-[24px]"
                                />
                        </div>
                    </Link>
                    <Link href="https://x.com/JuniorSemerzier">
                        <div className="rounded-full bg-black-2  p-3 cursor-pointer hover:bg-white-1">
                            <Image
                                src='/twitter.svg'
                                width={15}
                                height={15}
                                alt='github'
                                className="text-center w-[24px] h-[24px]"
                                />
                        </div>
                    </Link>
                        
                </div>
           </div>
           
        </motion.div>
       <motion.div 
          initial={{opacity:0, x:100}}
          whileInView={{opacity:1, x:0}} 
          transition={{duration:2}}
            className="flex justify-center items-center">
            <Image
                src={junior}
                placeholder='blur'
                width={200}
                height={200}
                alt='Junior Semerzier'
                className="w-full md:w-[350px] md:h-[350px] lg:w-[250px] lg:h-[250px]"
                />
       </motion.div>
    </div>
{/* second row */}
    <div className="grid grid-cols-2 xs:grid-cols-3 mt-16 gap-4 justify-center items-center">
                <AnimatedCounter amount={6} desc_1={t("years")} desc_2={t("experiences")}/>
                <AnimatedCounter amount={17} desc_1={t("projects")} desc_2={t("completed")}/>
                <AnimatedCounter amount={3} desc_1={t("technologes")} desc_2={t("mastering")}/>
    </div>
    </div>
  )
}

export default About
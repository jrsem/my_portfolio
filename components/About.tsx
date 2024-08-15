import React from 'react'
import Button from './Button'
import Image from 'next/image'
import junior from '@/public/junior.jpg'
import AnimatedCounter from './AnimatedCounter';
const About = () => {
  return (
    <div className="">
    <div className="text-white-1 grid md:grid-cols-2 gap-4">
        <div className="flex justify-center flex-col">
            <p className="text-white-2">Software developer | Full stack</p>
            <h1 className="text-4xl">Hello I&apos;m</h1>
            <h1 className="text-secondColor text-4xl mb-4">Junior Semerzier</h1>
            <p className="mb-6 text-justify">I excel at creating elegant digital experiences 
                and i am proficient in various programming languages and technologies. 

            </p>
        
           <div className="grid gap-6 sm:grid-cols-2 sm:my-6 md:grid-cols-1 lg:grid-cols-2">
                <Button
                    type='button'
                    title="Download cv"
                    variant='md:px-3md:py-1 text-secondColor p-2 sm:py-0 md:py-3 hover:bg-white-1'
                    icon='/download.svg'
                    />
                <div className="flex justify-center gap-6 px-2 sm:px-14 lg:px-0">
                        <div className="rounded-full bg-white-3 p-3 cursor-pointer hover:bg-white-1">
                            <Image
                            src='/github.svg'
                            width={15}
                            height={15}
                            alt='github'
                            className="text-center w-[24px] h-[24px]"
                            />
                        </div>
                        <div className="rounded-full bg-white-3 p-3 cursor-pointer hover:bg-white-1">
                            <Image
                                src='/linkedin.svg'
                                width={15}
                                height={15}
                                alt='github'
                            className="text-center w-[24px] h-[24px]"
                                />
                        </div>
                        <div className="rounded-full bg-white-3 p-3 cursor-pointer hover:bg-white-1">
                    <Image
                        src='/twitter.svg'
                        width={15}
                        height={15}
                        alt='github'
                        className="text-center w-[24px] h-[24px]"
                        />
                    </div>
                        
                </div>
           </div>
           
        </div>
       <div className="flex justify-center items-center">
            <Image
                src={junior}
                placeholder='blur'
                width={200}
                height={200}
                alt='Junior Semerzier'
                className="w-full md:w-[350px] md:h-[350px] lg:w-[250px] lg:h-[250px]"
                />
       </div>
    </div>
{/* second row */}
    <div className="grid grid-cols-2 xs:grid-cols-3 mt-16 gap-4 justify-center items-center">
                <AnimatedCounter amount={6} desc_1='Years' desc_2='of experiences'/>
                <AnimatedCounter amount={50} desc_1='Projects' desc_2='completed'/>
                <AnimatedCounter amount={5} desc_1='Technologies' desc_2='mastering'/>
    </div>
    </div>
  )
}

export default About
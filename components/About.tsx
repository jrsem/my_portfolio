import React from 'react'
import Button from './Button'
import Image from 'next/image'
import junior from '@/public/junior.jpg'
import AnimatedCounter from './AnimatedCounter';
const About = () => {
  return (
    <div className="px-10">
    <div className="pt-14 text-white-1 grid grid-cols-2 gap-4">
        <div className="flex justify-center flex-col">
            <p className="text-white-2">Software developpeur</p>
            <h1 className="text-4xl">Hello I am</h1>
            <h1 className="text-secondColor text-4xl mb-4">Junior Semerzier</h1>
            <p className="mb-4 text-justify text-[12px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ipsum ad, ducimus enim sunt recusandae magnam sapiente rerum 
            distinctio eaque dicta suscipit, a necessitatibus provident? 
            </p>
        
           <div className="flex gap-6">
           <Button
            type='button'
            title="Download cv"
            variant='px-3 py-1 text-secondColor text-[12px]'
            icon='/download.svg'
            />
           <div className="flex gap-4">
           <div className="rounded-full bg-white-3 p-2">
                <Image
                src='/github.svg'
                width={15}
                height={15}
                alt='github'
                className="text-center"
                />
            </div>
            <div className="rounded-full bg-white-3 p-2">
                <Image
                    src='/linkedin.svg'
                    width={15}
                    height={15}
                    alt='github'
                    />
            </div>
            <div className="rounded-full bg-white-3 p-2">
            <Image
                src='/twitter.svg'
                width={15}
                height={15}
                alt='github'
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
                />
       </div>
    </div>
{/* second row */}
    <div className="flex justify-between mt-16">
                <AnimatedCounter amount={6} desc_1='annees' desc_2='dexperience'/>
                <AnimatedCounter amount={10} desc_1='projects' desc_2='realisee'/>
                <AnimatedCounter amount={5} desc_1='technologie' desc_2='mastering'/>
    </div>
    </div>
  )
}

export default About
import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight,GitGraph } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {carousel_data} from '@/constants'
export function CarouselDemo() {
  return (
    <Carousel className="w-full relative mb-8">
      <CarouselContent className="mb-8">
        {carousel_data.map(({description,image,technologies,title,url_github,url_site,number,index}) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-2 text-white-1 gap-8 items-center">
                <div>
                    <div className="flex flex-col gap-4 border-b border-white-3 pb-4">
                        <h1 className="text-4xl text-bold">{number}</h1>
                        <h1 className="text-xl">{title}</h1>
                        <p className="text-white-3 text-justify">{description} 
                        </p>
                        <p className="text-secondColor">{technologies}</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        {/* <ArrowUpRight className='text-secondColor cursor-pointer'/> */}
                        <Link href={url_site} className="rounded-full bg-white-1 p-2 cursor-pointer hover:bg-white-3">
                        <Image
                            src='/google.svg'
                            width={10}
                            height={10}
                            alt='github'
                            className="text-center w-[15px] h-[15px]"
                            />
                        </Link>
                        <Link href={url_github} className="rounded-full bg-white-1 p-2 cursor-pointer hover:bg-white-3">
                        <Image
                            src='/github-light.svg'
                            width={10}
                            height={10}
                            alt='github'
                            className="text-center w-[15px] h-[15px]"
                            />
                        </Link>
                        {/* <GitGraph className='text-secondColor cursor-pointer'/> */}
                    </div>
                </div>
                
                <div className="p-1">
                    <Image src={image} width={500} height={500} alt='efes'/>
                </div>
            </div>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end absolute right-[3rem] bottom-3 z-100">
        <CarouselPrevious className="bg-secondColor "/>
        <CarouselNext className="bg-secondColor"/>
      </div>
    </Carousel>
  )
}

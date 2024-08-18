import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight,Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  carousel_data_en,
  carousel_data_fr,
  carousel_data_es,
  carousel_data_pt

} from '@/constants'
import {useTranslations, useLocale} from 'next-intl' 
export function CarouselDemo() {
  const locale=useLocale()
  return (
    <Carousel className="w-full relative mb-8">
      <CarouselContent className="mb-8">
        {(locale==='fr' ? carousel_data_fr : locale==='pt'? carousel_data_pt: locale==='en' ? carousel_data_en : carousel_data_es).map(({description,image,technologies,title,url_github,url_site,number,index}) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white-1 gap-8 items-center">
                <div>
                    <div className="flex flex-col gap-1 border-b border-white-3 pb-1">
                        <h1 className="text-4 text-bold">{number}</h1>
                        <h1 className="text-16">{title}</h1>
                        <p className="text-white-3 text-justify text-12">{description}</p>
                        <p className="text-secondColor text-14">{technologies}</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        {/* <ArrowUpRight className='text-secondColor cursor-pointer'/> */}
                        <Link href={url_site} className="rounded-full bg-white-1 p-2 cursor-pointer hover:bg-white-3">
                          <ArrowUpRight className='text-secondColor'/>
                        </Link>
                        <Link href={url_github} className="rounded-full bg-white-1 p-2 cursor-pointer hover:bg-white-3">
                        <Github className='text-secondColor'/>
                        </Link>
                        {/* <GitGraph className='text-secondColor cursor-pointer'/> */}
                    </div>
                </div>
                
                <div className="p-1">
                    <Image src={image} width={400} height={400} 
                    alt='efes'
                    />
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

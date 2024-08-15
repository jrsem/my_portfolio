"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {cn} from '@/lib/utils'
import { ScrollArea,ScrollBar  } from "@/components/ui/scroll-area"
import {useState} from 'react'
import Skill from '@/components/Skill'
import Education from './Education'
import Experience from './Experience'
export function Resume() {
    const [tab, setTab] = useState("experiences");

    const onTabChange = (value:string) => {
      setTab(value);
    }

  return (
    <Tabs value={tab} onValueChange={onTabChange} defaultValue="experiences" className="md:gap-4 w-full lg:w-[800px] h-auto text-white-1 grid md:grid-cols-2">

      <TabsList className="flex gap-4 flex-col w-full h-auto justify-start">
        <h1 className="text-3xl">Why hire me?</h1>
        <p className="w-full lg:max-w-[250px] text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus.</p>
        <TabsTrigger value="experiences" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='experiences'})}>Experiences</TabsTrigger>
        <TabsTrigger value="education" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='education'})}>Education</TabsTrigger>
        <TabsTrigger value="skills" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='skills'})}>Skills</TabsTrigger>
        <TabsTrigger value="about_me" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='about_me'})}>About me</TabsTrigger>
      </TabsList>

  
        
        <div>
                <TabsContent value="experiences" className="pt-10">
                <h1 className="text-xl">Experiencies</h1>
                    <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <ScrollArea className="h-[300px] w-full pt-2">
                        <div className="grid grid-cols-2 gap-2">
                       <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/>
                       <Experience localization="Haiti" year="2022 - up to now" role="freelance web developer"/>
                       <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/>
                       <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/>
                       </div>
                    </ScrollArea>
                </TabsContent>
                <TabsContent value="education" className="pt-10">
                <h1 className="text-xl">Education</h1>
                    <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="flex flex-col gap-4 pt-2">
                        <Education localization="Brazil" year="2019" description="Universidade federal de santa catarina-UFSC" title="Licence in computer science"/>
                        <Education localization="Brazil" year="2019" description="Universidade federal de santa catarina-UFSC" title="Licence in computer science"/>
                    </div>
                </TabsContent>
                <TabsContent value="skills" className="pt-10">
                <h1 className="text-xl">Skills</h1>
                    <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
                <ScrollArea className="h-[300px] w-auto md:w-full pt-2">
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                        <div className="flex justify-center"><Skill url='/icons/c.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/c++.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/django.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/graphql.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/matlab.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/nodejs.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/react.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/sanity.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/typescript.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/zod.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/python.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/sass.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/nextjs_icon_dark.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/javascript.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/haskell.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/git.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/html5.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/css.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/flask-wordmark-dark.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/postgresql.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/docker.svg'/></div>
                        <div className="flex justify-center"><Skill url='/icons/R_light.svg'/></div>
                        {/* <div className="flex justify-center"></div> */}
                       
                        
                        
                    
                        
                        
                        
                        
                        
                        
                    </div>
                    </ScrollArea>
                </TabsContent>
                <TabsContent value="about_me" className="pt-10">
                    <h1 className="text-xl">About me</h1>
                    <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
                    Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="flex gap-8 mt-6 text-[10px]">
                        <div className="flex flex-col gap-2">
                        <p>Name: <span className="text-white-2">Junior Semerzier</span></p>   
                        <p>Experiences: <span className="text-white-2">6+</span></p> 
                        <p>Nationality: <span className="text-white-2">Haitian</span></p> 
                        <p>Freelance: <span className="text-white-2">Available</span></p> 
                        </div>

                        <div className="flex flex-col gap-2">
                        <p>Phones: <span className="text-white-2">+(509)3440-2005 || +(509)3362-6238</span></p>  
                        <p>Email: <span className="text-white-2">juniorsemerzier@gmail.com</span></p>  
                        <p>Languages: <span className="text-white-2">French/portuguese/english</span></p>   
                        </div>

                    </div>
                </TabsContent>
        </div>
       
    </Tabs>
  )
}
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
    <Tabs value={tab} onValueChange={onTabChange} defaultValue="experiences" className="md:gap-4 w-full lg:w-[900px] h-auto text-white-1 grid lg:grid-x-1-2">
      <div className="span-x-2 lg:span-x-1">
      <TabsList className="flex gap-4 flex-col w-full h-auto justify-start">
        <h1 className="text-16">Why hire me?</h1>
        <p className="w-full lg:max-w-[250px] text-12 text-white-2">I will bring a combination of problem-solving ability, and a strong commitment to delivering high-quality software.</p>
        <TabsTrigger value="experiences" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='experiences'})}>Experiences</TabsTrigger>
        <TabsTrigger value="education" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='education'})}>Education</TabsTrigger>
        <TabsTrigger value="skills" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='skills'})}>Skills</TabsTrigger>
        <TabsTrigger value="about_me" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='about_me'})}>About me</TabsTrigger>
      </TabsList>
      </div>
      
        
      <div className="span-x-2">
            <TabsContent value="experiences" className="pt-10">
            <h1 className="text-16">Experiences</h1>
                <p className="text-12 text-white-2"> My experiences have equipped me with a strong foundation in software development, from building scalable applications to working in collaborative, Agile environments.
                </p>
                <ScrollArea className="h-[300px] w-full pt-2">
                    <div className="grid grid-cols-2 gap-2">
                    <Experience url="https://ihsi.gouv.ht/" localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="INSTITUT HAITIEN DE STATISTIQUE ET INFORMATIQUE - IHSI"/>
                    <Experience url="https://ernsyans.com/" localization="Canada" year="2022 - 2023" role="freelance web developer" enterprise="ERNSYANS TECHNOLOGY SOLUTIONS Ltd"/>
                    {/* <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/>
                    <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/> */}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="education" className="pt-10">
            <h1 className="text-16">Education</h1>
                <p className="text-12 text-white-2">I&apos;m a Bachelor&apos;s degree in Computer Science and is always eager to learn new technologies and improve my craft.
                </p>
                <div className="flex flex-col gap-4 pt-2">
                    <Education localization="Brazil" url="https://ufsc.br/" year="2019" description="Universidade Federal de Santa Catarina-UFSC" title="Bachelor’s degree in Computer Science"/>
                    {/* <Education localization="Brazil" year="2019" description="Universidade federal de santa catarina-UFSC" title="Licence in computer science"/> */}
                </div>
            </TabsContent>
            <TabsContent value="skills" className="pt-10">
            <h1 className="text-16">Skills</h1>
                <p className="text-12 text-white-2">I have a strong proficiency in programming languages such as JavaScript, Python, and C++, and is skilled in frameworks like React/nextjs, Django and the following technologies.
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
                    <div className="flex justify-center"><Skill url='/icons/mongodb.svg'/></div>
                    <div className="flex justify-center"><Skill url='/icons/prisma.svg'/></div>
                    {/* <div className="flex justify-center"></div> */}
                    
                    
                    
                
                    
                    
                    
                    
                    
                    
                </div>
            </ScrollArea>
            </TabsContent>
            <TabsContent value="about_me" className="pt-10">
                <h1 className="text-16">About me</h1>
                <p className="text-12 text-white-2">I&apos;m known for my problem-solving abilities, attention to detail, and commitment to writing clean, maintainable code.
                </p>
                <div className="flex justify-between mt-6 text-12">
                    <div className="flex flex-col gap-2">
                    <p>Name: <span className="text-white-2">Junior Semerzier</span></p>   
                    <p>Experiences: <span className="text-white-2">6+</span></p> 
                    <p>Nationality: <span className="text-white-2">Haitian</span></p> 
                    <p>Freelance: <span className="text-white-2">Available</span></p> 
                    </div>

                    <div className="flex flex-col gap-2">
                    <p>Phones: <span className="text-white-2">+(509) 3440-2005 || +(509) 3362-6238</span></p>  
                    <p>Email: <span className="text-white-2">juniorsemerzier@gmail.com</span></p>  
                    <p>Languages: <span className="text-white-2">French / Portuguese / English</span></p>   
                    </div>

                </div>
            </TabsContent>
      </div>  
    </Tabs>
  )
}
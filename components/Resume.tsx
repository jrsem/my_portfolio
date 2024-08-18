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
import {useTranslations} from 'next-intl'

export function Resume() {

  const t=useTranslations('resumePage');
    const [tab, setTab] = useState("experiences");

    const onTabChange = (value:string) => {
      setTab(value);
    }

  return (
    <Tabs value={tab} onValueChange={onTabChange} defaultValue="experiences" className="md:gap-4 w-full lg:w-[900px] h-auto text-white-1 grid lg:grid-x-1-2">
      <div className="span-x-2 lg:span-x-1">
      <TabsList className="flex gap-4 flex-col w-full h-auto justify-start">
        <h1 className="text-16">{t("title")}</h1>
        <p className="w-full lg:max-w-[250px] text-12 text-white-2">{t("Why_hire_me")} </p>
        <TabsTrigger value="experiences" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='experiences'})}>{t("experience")}</TabsTrigger>
        <TabsTrigger value="education" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='education'})}>{t("education")}</TabsTrigger>
        <TabsTrigger value="skills" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='skills'})}>{t("skills")}</TabsTrigger>
        <TabsTrigger value="about_me" className={cn("bg-black-2 w-full lg:w-[250px] p-0 hover:bg-secondColor py-2",{"bg-secondColor":tab==='about_me'})}>{t("about_me")}</TabsTrigger>
      </TabsList>
      </div>
      
        
      <div className="span-x-2">
            <TabsContent value="experiences" className="pt-10">
            <h1 className="text-16">{t("experience")}</h1>
                <p className="text-12 text-white-2"> {t("expereinces_title")}
                </p>
                <ScrollArea className="h-[300px] w-full pt-2">
                    <div className="grid grid-cols-2 gap-2">
                    <Experience url="https://ihsi.gouv.ht/" localization={t("experiences_card_1.country")} year={t("experiences_card_1.years")} role={t("experiences_card_1.position")} enterprise={t("experiences_card_1.instutition_name")}/>
                    <Experience url="https://ernsyans.com/" localization={t("experiences_card_2.country")}  year={t("experiences_card_2.years")} role={t("experiences_card_2.position")}  enterprise={t("experiences_card_2.instutition_name")}/>
                    {/* <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/>
                    <Experience localization="Haiti" year="2020 - up to now" role="Frontend developer" enterprise="Institut Haitien de statistique et informatique"/> */}
                    </div>
                </ScrollArea>
            </TabsContent>
            <TabsContent value="education" className="pt-10">
            <h1 className="text-16">{t("education")}</h1>
                <p className="text-12 text-white-2">{t("education_desc")}
                </p>
                <div className="flex flex-col gap-4 pt-2">
                    <Education localization={t("education_localization")} url="https://ufsc.br/" year={t("education_year")} description={t("education_university")} title={t("education_title")}/>
                    {/* <Education localization= year="2019" description="Universidade federal de santa catarina-UFSC" title="Licence in computer science"/> */}
                </div>
            </TabsContent>
            <TabsContent value="skills" className="pt-10">
            <h1 className="text-16">{t("skills")}</h1>
                <p className="text-12 text-white-2">{t("skills_desc")}
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
                <h1 className="text-16">{t("about_me")}</h1>
                <p className="text-12 text-white-2">{t("about_me_desc")}
                </p>
                <div className="flex justify-between mt-6 text-12">
                    <div className="flex flex-col gap-2">
                    <p>{t("about_me_name")}: <span className="text-white-2">Junior Semerzier</span></p>   
                    <p>{t("about_me_experiences")}: <span className="text-white-2">6+</span></p> 
                    <p>{t("about_me_nationality")}: <span className="text-white-2">{t("about_me_nationality_name")}</span></p> 
                    <p>{t("about_me_freelance")}: <span className="text-white-2">{t("about_me_disponibilidade")}</span></p> 
                    </div>

                    <div className="flex flex-col gap-2">
                    <p>{t("about_me_phone")}: <span className="text-white-2">+(509) 3440-2005 || +(509) 3362-6238</span></p>  
                    <p>{t("about_me_email")}: <span className="text-white-2">juniorsemerzier@gmail.com</span></p>  
                    <p>{t("about_me_language")}: <span className="text-white-2">{t("about_me_language_fr")} / {t("about_me_language_pt")} / {t("about_me_language_en")}</span></p>   
                    </div>

                </div>
            </TabsContent>
      </div>  
    </Tabs>
  )
}
import React from 'react'
import Service from './Service'
import {useTranslations} from 'next-intl' 
const Services = () => {

  const t=useTranslations('ServicePage');
  return (
    <div className="grid text-white-2 sm:grid-cols-2 gap-8 lg:gap-16">
        <Service title={t("service_01_title")} 
        description={t("service_01")} 
        number="01"
         url='/web-app'
        />
        {/* <Service title="UI/UX design" 
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reprehenderit?'
        number="02"
        url='/ui-ux'
        /> */}
        <Service title={t("service_02_title")} 
        description={t("service_02")} 
        number="02"
         url='/iot'
        />
        <Service title={t("service_03_title")} 
        description={t("service_03")}
        number="03"
         url='/mobile-app'
        />
    </div>
  )
}

export default Services

"use client"
import React,{useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomFormField , {FormFieldType} from "./CustomFormField";
import { Button } from "@/components/ui/button"
import SubmitButton from '@/components/SubmitButton'
import {Mail,Phone,MapPinCheckInside} from 'lucide-react'
import {
  Form,
} from "@/components/ui/form"
import { toast } from "sonner"

import {useTranslations, useLocale} from 'next-intl' 
import {
  services_fr,
  services_es,
  services_en,
  services_pt,

  email_en,
  email_fr,
  email_es,
  email_pt
} from '@/constants'
import {
    SelectItem,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {sendEmail} from '@/actions'
import { useTransition } from "react";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  service: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone:z.string()
  .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  content:z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const Contact_form = () => {
  const [isPending, startTransition] = useTransition();

  const t=useTranslations('contactPage');
  const locale=useLocale()
    // const [isLoading, setIsLoading] = useState(false);
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email:"",
      phone:"",
      service:undefined,
      content:""
    },
  })
 

  // 2. Define a submit handler.
 function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const {email,service,lastname,firstname, phone,content}=values
    startTransition(async () => {
     const response=   await sendEmail(content,email,phone,service,firstname,lastname)
        form.reset() 
        toast(
         "",
          {
            className:"bg-[#d5f5e3]",
            description:  locale==='fr' ? email_fr : locale==='pt'? email_pt: locale==='en' ? email_en : email_es
          }
        )
        console.log(response)
    })
   console.log(values)
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8  text-12 text-white-1">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:flex-row ">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="firstname"
                label={t("firstname")}
                placeholder="John Doe"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="lastname"
                label={t("lastname")}
                placeholder="John Doe"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
              />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:flex-row">
                <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label={t("email")}
                placeholder="johndoe@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
              />
          

              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label={t("phone_number")}
                placeholder="(555) 123-4567"
              />
        </div>
        <div className="w-full">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="service"
            label={t("choose_service")}
            placeholder={t("select_service_placeholder")}
          >
            {(locale==='fr' ? services_fr : locale==='pt'? services_pt: locale==='en' ? services_en : services_es).map((service, i) => (
              <SelectItem key={service.label + i} value={service.value}>
                <div className="flex cursor-pointer items-center gap-2 text-white-1">
                  <p>{service.label}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>
        <div className="w-full">
        <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="content"
              label={t("message")}
              placeholder={t("massage_placeholder")}
            />
        </div>
        <SubmitButton isLoading={isPending}>{t("btn")}</SubmitButton>
    </form>
  </Form>
  )
}

export default Contact_form
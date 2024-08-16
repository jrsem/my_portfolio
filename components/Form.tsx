
"use client"
import React,{useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomFormField , {FormFieldType} from "./CustomFormField";
import { Button } from "@/components/ui/button"
import SubmitButton from '@/components/SubmitButton'
import {
  Form,
} from "@/components/ui/form"
import {services} from '@/constants'
import {
    SelectItem,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
 
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
  phone_number:z.string()
  .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  message:z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const Contact_form = () => {
    const [isLoading, setIsLoading] = useState(false);
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email:"",
      phone_number:"",
      service:"",
      message:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
                label="First name"
                placeholder="John Doe"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="lastname"
                label="Last name"
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
                label="Email"
                placeholder="johndoe@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
              />
          

              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone_number"
                label="Phone number"
                placeholder="(555) 123-4567"
              />
        </div>
        <div className="w-full">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="service"
            label="Choose service"
            placeholder="Select a service"
          >
            {services.map((service, i) => (
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
              name="message"
              label="Message"
              placeholder="write here your message..."
            />
        </div>
        <SubmitButton isLoading={isLoading}>Send message</SubmitButton>
    </form>
  </Form>
  )
}

export default Contact_form
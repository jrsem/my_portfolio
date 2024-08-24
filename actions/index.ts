"use server"
import { sendMail,compilePortfolioTemplate } from "@/lib/mail";
export const sendEmail=async (
    content: string,
    email: string, 
    phone:string,
    service:string,
    firstname:string,
    lastname:string
    
  ) =>{
    await sendMail({
      to: "juniorsemerzier@gmail.com",//"sakuradev23@gmail.com", //receiver email 
      name: "JrPortfolio", //name of the sender
      subject: "Email from client",//subject
      body: compilePortfolioTemplate(content,email,phone,service,firstname,lastname),
      from:email
    });
  }
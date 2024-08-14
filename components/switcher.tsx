"use client"
import React from 'react'
import {Languages} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {Link, usePathname, useRouter} from'@/navigation'
const Switcher = () => {

    const pathname=usePathname()
    const route=useRouter()
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm'>
            <Languages className="h-[1.2rem] w-[1.2rem]"/>
            <span className='sr-only'>Toggle language</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align='end'>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e)=>{
          e.preventDefault();
          route.push(pathname,{locale:'fr'})
          }}>
           Francais
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>route.push(pathname,{locale:'en'})}>
           Anglais
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e)=>{
          e.preventDefault();
          route.push(pathname,{locale:'fr'})}}>
        Kreyol
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default Switcher


import { MainNav } from "@/component/main-nav";
import UserButton from "./user-button";
import Image from "next/image";
import { getSession } from 'next-auth/react';
import { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
  } from '@/components/ui/sheet';
  import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link"
import { cn } from "@/lib/utils"


const Navbar = () => {

    const pathname = usePathname();
    const params = useParams();
    const [isOpen, setIsOpen] = useState(false)
  
   const routes = [
      {
        href: `/`,
        label: 'Overview',
        active: pathname === `/`,
      },
      {
        href: `/users`,
        label: 'Users',
        active: pathname === `/users`,
      },
      {
        href: `/orders`,
        label: 'Orders',
        active: pathname === `/orders`,
      },
      {
        href: `/trades`,
        label: 'Trades',
        active: pathname === `/trades`,
      },
      {
        href: `/kyc`,
        label: 'KYC',
        active: pathname === `/kyc`,
      },
      {
        href: `/support`,
        label: 'Support',
        active: pathname === `/support`,
      },
      {
        href: `/tokens`,
        label: 'Tokens',
        active: pathname === `/tokens`,
      },
      {
        href: `/wallets`,
        label: 'Wallets',
        active: pathname === `/wallets`,
      },
      {
        href: `/settings`,
        label: 'Settings',
        active: pathname === `/settings`,
      },
    ]


  return ( 
 
    <div className="border-b">
      <div className="flex h-16 items-center px-4 ">
        <div className="md:hidden pr-10">
        <Sheet open={isOpen}>
      <SheetTrigger asChild >
        <Button variant="ghost" size="icon" 
        onClick={() => setIsOpen(true)}
        className='
        lg:hidden'
        >
                <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='
       flex py-14 flex-col
      '>
      
      <nav
      className={cn("flex flex-col items-start gap-4")}
      >
      {routes.map((route) => (
        <Link
         onClick={() => setIsOpen(false)}
          key={route.href}
          href={route.href}
          className={cn(
            'text-md font-medium transition-colors hover:text-primary py-1 px-2 rounded-lg hover:bg-slate-200 w-full',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
            
        
      </SheetContent>
   </Sheet>
        </div>
        <Image
        className="w-18 h-18"
        width={100}
        height={100}
        src={"/images/unilogo2.png"}
        />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
        
       <UserButton/>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;

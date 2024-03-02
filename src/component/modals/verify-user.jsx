'use client';

import React, { useEffect, useState } from 'react'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios"
import FileUpload from '@/component/file-upload';
import {
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle
} from "@/components/ui/dialog"
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage
} from "@/components/ui/form"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import {useForm} from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { useModal } from '../../../hooks/use-modal-store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required."
    }),
    imageUrl: z.string().min(1, {
        message: "server image is required."
    })
}) 

export const SourceType = {
    BINANCE : "BINANCE",
    MNB : "MNB"
}

export const VerifyUser = () => {

    const [isMounted, setIsMounted] = useState(false)
    const {isOpen , onClose, type, data} = useModal()
    const isOpenModal = isOpen && type === "verifyUser"
    const router = useRouter()

    useEffect(() => {
     setIsMounted(true)
    }, [])


    const form = useForm({
        resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        imageUrl: ""
    }
    })

    const isLoading = form.formState.isSubmitting;

    const onVerify = async () => {
      
        try{
          const id = data.userId
          const patchApi =  await axios.patch("/api/fetch-kyc-data", {"userId" : id})
             console.log(patchApi)
             onClose()
            // form.reset()
            // router.refresh()
            // window.location.reload()

            
        } catch(e) {
            console.log(e)
        }
    }


  if(!isMounted) {
    return null
  }



  return (
  
    <Dialog
    open={isOpenModal}
    onOpenChange={onClose}
    >
     
        <DialogContent
         className='
         bg-white
         text-black
        space-x-8
        
         '
         >
            <DialogHeader className='
            pt-8
            px-6

            '>
                   <DialogTitle className='
                   text-2xl
                   text-center
                   font-bold
                   '>
                     Verify
                   </DialogTitle>
                   <DialogDescription className='
                   text-center
                   text-zinc-500
                   '>
                     Are you sure you want to change the verifcation status the user?
                   </DialogDescription>
            </DialogHeader>

         <DialogFooter>
            <Button onClick={() => onVerify()} className="bg-blue-400">
               Verify
            </Button>
         </DialogFooter>

         </DialogContent>
      
   
      
       

    </Dialog>
   
  )
}

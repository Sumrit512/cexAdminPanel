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

export const DeleteUser = () => {

    const [isMounted, setIsMounted] = useState(false)
    const {isOpen , onClose, type, data} = useModal()
    const isOpenDeleteUser = isOpen && type === "deleteUser"
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

    const onSubmit = async (values) => {
        console.log(values)
        try{
            await axios.post("/api/servers", values)

            form.reset()
            router.refresh()
            window.location.reload()

            
        } catch(e) {
            console.log(e)
        }
    }

    const onDelete = async () => {
        try {
            console.log(data.userId)
            const id = data.userId
        const apiDelete = await axios.delete("/api/fetch-users", {params : {userId : id}})
        console.log(apiDelete)
        onClose()
        } catch(e) {
            console.log(e)
        }
    }


  if(!isMounted) {
    return null
  }

console.log(data)

  return (
  
    <Dialog
    open={isOpenDeleteUser}
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
                     Delete
                   </DialogTitle>
                   <DialogDescription className='
                   text-center
                   text-zinc-500
                   '>
                     Are you sure you want to delete the user?
                   </DialogDescription>
            </DialogHeader>

         <DialogFooter>
            
            <Button 
            onClick={() => onDelete()}
            className="bg-red-400 hover:">
               Delete
            </Button>
         </DialogFooter>

         </DialogContent>
      
   
      
       

    </Dialog>
   
  )
}

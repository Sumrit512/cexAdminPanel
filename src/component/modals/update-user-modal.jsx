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
    username: z.string().min(1, {
        message: "user name is required."
    }),
    email: z.string().min(1, {
        message: "user email is required."
    }),
    name: z.string().min(1, {
        message: "user full name is required."
    }),
}) 

export const SourceType = {
    BINANCE : "BINANCE",
    MNB : "MNB"
}

export const UpdateUser = () => {

    const [isMounted, setIsMounted] = useState(false)
    const {isOpen , onClose, type, data} = useModal()
    const isOpenModal = isOpen && type === "updateUser"
    const router = useRouter()
    const [form, setForm] = useState(useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: data.fullName,
        proiflePicture: data.profilePicture,
        username: data.userName,
        email: data.email
    }
    }))

    useEffect(() => {
     setIsMounted(true)
 
    }, [data, isMounted, isOpen])

    
    // const form = useForm({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //     name: data.fullName,
    //     proiflePicture: data.profilePicture,
    //     username: data.userName,
    //     email: data.email
    // }
    // })

    const isLoading = form.formState.isSubmitting;

    const onUpdate = async (values) => {
        console.log(values)
        try{
            await axios.patch("/api/fetch-users", values)

            form.reset()
            router.refresh()
            window.location.reload()

            
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
         p-0
        
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
                      Update User Details
                   </DialogTitle>
                 
            </DialogHeader>

            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onUpdate)}
                className='
                px-6
                '
                >
                    
                               
                                <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => {
                                console.log(field)
                                return (
                                
                                <FormItem>
                                        <FormLabel className='
                                        uppercase 
                                        text-xs
                                        font-bold
                                        text-zinc-500
                                        dark:text-secondary/70
                                        '>
                                        User Name
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className='
                                        bg-zinc-300/50
                                        border-0
                                        focus-visible:ring-0
                                        text-black
                                        focus-visible:ring-offset-0
                                        '
                                        placeholder='Enter User name'
                                        {...field}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                                    )}}
                            />
                            <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                        <FormLabel className='
                                        uppercase 
                                        text-xs
                                        font-bold
                                        text-zinc-500
                                        dark:text-secondary/70
                                        '>
                                        Name
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                        disabled={isLoading}
                                        className='
                                        bg-zinc-300/50
                                        border-0
                                        focus-visible:ring-0

                                        text-black
                                        focus-visible:ring-offset-0
                                        '
                                        placeholder='Enter Name'
                                        {...field}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                                    )}
                            />
                            <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                        <FormLabel className='
                                        uppercase 
                                        text-xs
                                        font-bold
                                        text-zinc-500
                                        dark:text-secondary/70
                                        '>
                                        Email
                                        </FormLabel>
                                        <FormControl>
                                        <Input
                                        
                                        disabled={isLoading}
                                        className='
                                        bg-zinc-300/50
                                        border-0
                                        focus-visible:ring-0
                                        text-black
                                        focus-visible:ring-offset-0
                                        '
                                        placeholder='Enter Email'
                                        {...field}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                                    )}
                            />
                        
                           

                            {/* <div className='
                            flex-1
                            flex
                            mt-4
                            items-center
                            justify-center
                            text-center
                            '> 
                                <FormField
                                control={form.control}
                                name="profilePicture"
                                render={({field}) => (
                                <FormItem>
                                       <FormLabel>
                                            Profile Picture
                                        </FormLabel>
                                    <FormControl>
                                     
                                        <FileUpload
                                        endpoint="serverImage"
                                        value={field.value}
                                        onChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                                )}
                                />
                            </div> */}
                                    
                         
                  
                  
                   

                    <DialogFooter className='
                    bg-gray-100
                    px-6
                    py-4
                    '>
                        <Button disabled={isLoading} variant="primary">
                            Create
                        </Button>

                    </DialogFooter>

                </form>
            </Form>

         </DialogContent>
      
   
      
       

    </Dialog>
   
  )
}

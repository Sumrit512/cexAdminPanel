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

export const AddToken = () => {

    const [isMounted, setIsMounted] = useState(false)
    const {isOpen , onClose, type, data} = useModal()
    const isOpenAddToken = isOpen && type === "addToken"
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


  if(!isMounted) {
    return null
  }



  return (
  
    <Dialog
    open={isOpenAddToken}
    onOpenChange={onClose}
    >
     
        <DialogContent
         className='
         bg-white
         text-black
         p-0
         overflow-y-scroll
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
                      Add a New token
                   </DialogTitle>
                   <DialogDescription className='
                   text-center
                   text-zinc-500
                   '>
                     Give your token a personality with a name and image 
                   </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='
                space-y-8
                '
                >
                  <div className='
                 
                  px-6
                  '>
                    

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
                                Token Name
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
                                placeholder='Enter Token name'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
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
                                Token Symbol
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
                                placeholder='Enter Token Symbol'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
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
                                Initial Price
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
                                placeholder='Enter Initial Price'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
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
                                Market Supply
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
                                placeholder='Enter Market supply'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
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
                                Total Supply
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
                                placeholder='Enter Total Supply'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
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
                                Initial Price
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
                                placeholder='Enter Initial Price'
                                {...field}
                                />
                              </FormControl>
                              <FormMessage />
                        </FormItem>
                            )}
                    />
                 

                    <FormField
                        control={form.control}
                        name="type"
                        render={({field}) => (
                            <FormItem
                            className="
                            uppercase text-xs
                            font-bold
                            text-zinc-500
                            dark:text-secondary/70
                            "
                            >
                                <FormLabel>Source</FormLabel>
                                <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger
                                    className="
                                    bg-zinc-300/50
                                    border-0
                                    focus:ring-0
                                    text-black
                                    ring-offset-0
                                    focus:ring-offset-0
                                    capitalize
                                    outline-none
                                    "
                                    >
                                       <SelectValue
                                       placeholder="Select a Source"
                                       />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {
                                        Object.values(SourceType).map((type) => (
                                            <SelectItem
                                            key={type}
                                            value={type}
                                            className="capitalize"
                                            >
                                               {type.toLowerCase()}
                                            </SelectItem>
                                        ))
                                    }
                                  </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className='
                    flex
                    mt-4
                    items-center
                    justify-center
                    text-center
                    '> 
                     <FormField
                     control={form.control}
                     name="imageUrl"
                     render={({field}) => (
                        <FormItem>
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
                    </div>
                    
                    </div>  

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

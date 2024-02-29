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
        message: "Token name is required."
    }),
    symbol: z.string().min(1, {
        message: "Token symbol is required."
    }),
    volume: z.string().min(1, {
        message: "Token volume is required."
    }),
    totalSupply: z.string().min(1, {
        message: "Token supply is required."
    }),
    price: z.string().min(1, {
        message: "Token inital price is required."
    }),
    dataSrc: z.string().min(1, {
        message: "Token Data source is required."
    }),
    tradable: z.string(),
    src: z.string().min(1, {
        message: "Token logo is required."
    })
}) 

export const SourceType = {
    BINANCE : "BINANCE",
    MNB : "MNB"
}
export const TradableType = {
    YES : "yes",
    NO : "no"
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
        symbol: "",
        src: "",
        volume : "",
        totalSupply : "",
        dataSrc : "",
        tradable : "",
        price: ""
    }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values) => {
        console.log(values)
        try{
            
            const data = {
                C : Date.now() - 1,
                E : Date.now(),
                P : "0",
                s : `${values.symbol}USDT`,
                q : "0",
                v: "0",
                h : values.price.toString(),
                l : values.price.toString(),
                p : "0",
                o: values.price.toString(),
                w: values.price.toString(),
                x : values.price.toString(),
                t: values.totalVolume,
                label: `${values.symbol.toLowerCase()}usdt@ticker`,
                c: values.price.toString()
            }
            console.log(values.label)
           const apiResp = await axios.post("/api/add-token", values)
        //     console.log(data)
            const resp = await axios.post(`http://localhost:3006/insert`, data)
           // console.log(resp)
             form.reset()
              onClose()
          
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
    open={isOpenAddToken}
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
          
                '
                >
                    <div className='flex flex-row '>
                                <div className='flex-1 flex flex-col gap-2'>
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
                            name='symbol'
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
                            name='price'
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
                            {/* <FormField
                            control={form.control}
                            name='marketSupply'
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
                            /> */}
                           

                            <div className='
                            flex-1
                            flex
                            mt-4
                            items-center
                            justify-center
                            text-center
                            '> 
                                <FormField
                                control={form.control}
                                name="src"
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
                            <div className='
                         
                            px-6
                            flex-1 flex flex-col gap-2
                            '>
                            

                            <FormField
                            control={form.control}
                            name='totalSupply'
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
                            name='tradable'
                            render={({ field }) => (
                                <FormItem>
                                        <FormLabel className='
                                        uppercase 
                                        text-xs
                                        font-bold
                                        text-zinc-500
                                        dark:text-secondary/70
                                        '>
                                        Tradable
                                        </FormLabel>
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
                                                placeholder="Select tradablity"
                                                />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {
                                                Object.values(TradableType).map((type) => (
                                                    <SelectItem
                                                    key={type}
                                                    value={type}
                                                  className="capitalize"
                                                    >
                                                        {type.toUpperCase()}
                                                    </SelectItem>
                                                ))
                                            }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                </FormItem>
                                    )}
                            />
                             <FormField
                            control={form.control}
                            name='volume'
                            render={({ field }) => (
                                <FormItem>
                                        <FormLabel className='
                                        uppercase 
                                        text-xs
                                        font-bold
                                        text-zinc-500
                                        dark:text-secondary/70
                                        '>
                                        Volume
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
                                        placeholder='Volume'
                                        {...field}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                                    )}
                            />

                            <FormField
                                control={form.control}
                                name="dataSrc"
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

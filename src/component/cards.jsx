import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Users2 } from 'lucide-react'
import React from 'react'

const Cards = ({heading, icon, value, change }) => {
  return (
 
        <div
        className="flex w-72 h-36 flex-col items-start justify-center rounded-md border border-slate-500 px-8 py-4 hover:bg-slate-100 cursor-pointer">
       <div className='flex flex-row justify-between items-center w-full'>
       <h5 className='font-medium'>
        {heading}
        </h5>
        <Users2 className='w-6 h-6'/>
        </div> 
        <h2 className='font-bold text-4xl pt-2 pl-6'>
         $ {value}
        </h2>
        <p className='text-sm pt-2'>
        {change}
        </p>
        
        
      </div>
 
  )
}

export default Cards
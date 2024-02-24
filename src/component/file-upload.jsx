"use client";

import React from 'react'

import {FileIcon, X} from "lucide-react"
import Image from 'next/image';
import { UploadButton } from "../utils/uploadthings";

import "@uploadthing/react/styles.css"


const FileUpload= ({
    onChange,
    value, 
    endpoint
}) => {

    const fileType = value?.split(".").pop()
 
    if(value && fileType !== "pdf") {
        return(
<div className='
        relative h-20 w-20
        '>
           <Image
           fill
           src={value}
           alt='upload'
           className='
           rounded-full
           '
           />
           <button
           type='button'
           onClick={() => onChange("")}
           className='
           bg-rose-500
           text-white
           p-1
           rounded-full
           absolute 
           top-0
           right-0
           shadow-sm 
           '
           >
             <X
             className='
             h-4
             w-4
             '

             />
           </button>
        </div>
        )
        
    }

    if(value && fileType === "pdf") {
        return (
            <div className='relative 
            flex 
            items-center 
            p-2 
            mt-2 
            rounded-md
            bg-background/10'>
                <FileIcon
                className='
                h-10
                w-10 
                fill-indigo-200
                stroke-indigo-400
                '
                />
                <a href={value}
                target='_blank'
                rel='noopener noreferrer'
                className='ml-2 
                text-sm
                text-indigo-500
                dark:text-indigo-400
                hover:underline
                '
                >
                 {value}
                </a>

                <button
                    type='button'
                    onClick={() => onChange("")}
                    className='
                    bg-rose-500
                    text-white
                    p-1
                    rounded-full
                    absolute 
                    -top-0
                    -right-0
                    shadow-sm 
                    '
                    >
                            <X
                            className='
                            h-4
                            w-4
                            '
                            />
           </button>

            </div>
        )
    }

  return (
    <div>
    
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

    

    </div>
  )
}

export default FileUpload
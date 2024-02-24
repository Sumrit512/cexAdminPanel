"use client";

import { useEffect, useState } from "react";
import { AddToken } from "@/component/modals/add-token";

export const ModalProvider = () => {


    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return (
        <>
         <AddToken/>
        </>
    )
}

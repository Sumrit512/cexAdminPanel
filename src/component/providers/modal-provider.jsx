"use client";

import { useEffect, useState } from "react";
import { AddToken } from "@/component/modals/add-token";
import { DeleteUser } from "../modals/delete-user-modal";
import { BlockUser } from "../modals/block-user-modal";
import { UpdateUser } from "../modals/update-user-modal";
import { BlockToken } from "../modals/block-token";
import { DeleteToken } from "../modals/delete-token";

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
         <DeleteUser/>
         <BlockUser/>
         <UpdateUser/>
         <BlockToken/>
         <DeleteToken/>
        </>
    )
}

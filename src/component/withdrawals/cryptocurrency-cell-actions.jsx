"use client";

import axios from "axios";
import { useState } from "react";
import { Blocks, Copy, Edit, MoreHorizontal, Pen, Trash } from "lucide-react";
import { toast } from "react-hot-toast";


import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useModal } from "../../../hooks/use-modal-store";




export const CryptocurrencyCellAction = ({
  data
}) => {

 const {onOpen} = useModal()
 
  const onConfirm = async () => {
    console.log("Confirmed")
  };

  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success('Billboard ID copied to clipboard.');
  }

  
  return (
    <>
     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          {/* <DropdownMenuItem
            onClick={() => onOpen("updateUser", data)}
          >
            <Edit className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem> */}
          {data.tradable ? <DropdownMenuItem
            onClick={() => onOpen("blockToken", data)}
          >
            <Blocks className="mr-2 h-4 w-4" /> Approve Request
          </DropdownMenuItem> : 
          <DropdownMenuItem
          onClick={() => onOpen("blockToken", data)}
        >
          <Blocks className="mr-2 h-4 w-4" /> Approve Request
        </DropdownMenuItem>
          }
          <DropdownMenuItem
            onClick={() => onOpen("deleteToken", data)}
          >
            <Trash className="mr-2 h-4 w-4" /> Reject Request
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

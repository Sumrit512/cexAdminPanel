"use client"

import ProfilePicture from "../users/profile-picture";
import { CellAction } from "./cell-action";


export const columns= [
 
  {
    accessorKey: "src",
    header: "Logo",
    cell: ({ row }) => <ProfilePicture source={row.original.src} />
  },
  {
    accessorKey: "createdAt",
    header: "Listing Date",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "dataSrc",
    header: "Source",
  },
  {
    accessorKey: "totalSupply",
    header: "Total Supply",
  },
  {
    accessorKey: "volume",
    header: "Volume",
  },
  {
    accessorKey: "tradable",
    header: "Tradable",
  },
  
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];

"use client"

import FormatDateRender from "../format-date-render";
import FormatTextRender from "../format-text-render";
import { CryptocurrencyCellAction } from "./cryptocurrency-cell-actions";



export const columnsCryptocurrency= [
  {
    accessorKey: "userId",
    header: "UserId",
    cell: ({row}) => <FormatTextRender data={row?.original?.userId} len={5}/>
  },
  {
    accessorKey: "placedAt",
    header: "Requested on",
    cell: ({row}) => <FormatDateRender data={row?.original?.placedAt}/>
  },
  {
    accessorKey: "withdrawType",
    header: "Withdraw Type",
  },
  {
    accessorKey: "withdrawFrom",
    header: "Withdraw From",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "blockchain",
    header: "Blockchain",
  },
  {
    accessorKey: "receiverAddress",
    header: "Receiver Address",
    cell: ({row}) => <FormatTextRender data={row?.original?.receiverAddress} len={5}/>
  },
  {
    accessorKey: "blockchain",
    header: "Blockchain",
  },
  {
    accessorKey: "isCompleted",
    header: "Completed",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "action",
    cell : ({row}) => <CryptocurrencyCellAction data={row?.original}/>
  }
];



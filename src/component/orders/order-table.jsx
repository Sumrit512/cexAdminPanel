import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const OrderTable = () => {

    const data = [
        {
           id: "aksdjaiod",
           userid: "ajsdiauhd",
           type: "Buy",
           price: "212.5",
           placedAt: "18-02-2024",
           value : "2154",
           quantity : "10",
           tradeSymbol : "bnb_usdt",
           status : "filled",
           orderType : "market"
        }
    ]

  return (
    <DataTable searchKey="username" columns={columns} data={data} />
  )
}

export default OrderTable
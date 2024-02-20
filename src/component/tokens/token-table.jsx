import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const TokenTable = () => {

    const data = [
        {
           name: "Binance",
           symbol: "BNB",
           ticker: "bnb_usdt",
           status: "live",
           tradable: "true",
           source : "binance"
        }
    ]

  return (
    <DataTable searchKey="name" columns={columns} data={data} />
  )
}

export default TokenTable
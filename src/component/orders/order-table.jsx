import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchOrders } from '../../../hooks/useApis'


const OrderTable = () => {

  const {data, isLoading} = useQuery("orders", useFetchOrders, {
    refetchInterval: 5000
  })

    const dummyData = [

      
        {
           id: "aksdjaiod",
           userId: "ajsdiauhd",
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
    <DataTable searchKey="id" columns={columns} data={data ? data : dummyData} isLoading={isLoading}/>
  )
}

export default OrderTable
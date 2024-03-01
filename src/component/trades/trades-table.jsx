import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchTrades } from '../../../hooks/useApis'


const TradeTable = () => {

  const {data, isLoading} = useQuery("trades", useFetchTrades, {
    refetchInterval: 5000
  })

    const dummyData = [
        {
           id: "adasd",
           buyerId: "sadkj",
           sellerId: "dasda",
           price: "458",
           quantity: "45",
           value : "594521",
           symbol : "BNB_USDT",
           status : "COMPLETED",
           createdAt : "04-02-2024"
        }
    ]

  return (
    <DataTable searchKey="id" columns={columns} data={data? data : dummyData} isLoading={isLoading}/>
  )
}

export default TradeTable
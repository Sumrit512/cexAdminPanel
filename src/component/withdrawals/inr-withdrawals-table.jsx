import  DataTable  from '@/components/ui/data-tables'
import React from 'react'

import { useQuery } from 'react-query'
import { useInrWithdrawals } from '../../../hooks/useApis'
import { columnsInr } from './columns-inr'



const InrWithdrawalsTable = () => {

  // {
  //   accessorKey: "userId",
  //   header: "UserId",
  // },
  // {
  //   accessorKey: "blockchain",
  //   header: "Blockchain Type",
  // },
  // {
  //   accessorKey: "currencySymbol",
  //   header: "Symbol",
  // },
  // {
  //   accessorKey: "walletAddress",
  //   header: "Wallet Address",
  // },
  // {
  //   accessorKey: "privateKey",
  //   header: "Wallet Private Key",
  // },

 

  const {data, isLoading} = useQuery("cryptocurrencyWithdrawals", useInrWithdrawals, {
    refetchInterval: 5000
  })

    const dummyData = [
        {
          userId : "",
          withdrawType : "",
          withdrawFrom : "",
          placedAt : "",
          upiId : "" ,
          bank : "",
          accountNo : "",
          ifsc : "",
          isCompleted : "",          
          status : "",
          withdrawTo : "",
          amount : "",
        
        }
    ]

  return (
    <DataTable searchKey="userId" columns={columnsInr} data={data? data : dummyData} isLoading={isLoading}/>
  )
}

export default InrWithdrawalsTable
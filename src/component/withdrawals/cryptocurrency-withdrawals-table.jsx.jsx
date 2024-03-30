import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { useCryptocurrencyWithdrawals } from '../../../hooks/useApis'
import { useQuery } from 'react-query'
import { columnsCryptocurrency } from './columns-cryptocurrency'


const CryptocurrencyWithdrawalTable = () => {

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

 

  const {data, isLoading} = useQuery("cryptocurrencyWithdrawals", useCryptocurrencyWithdrawals, {
    refetchInterval: 5000
  })

    const dummyData = [
        {
          userId : "",
          withdrawType : "",
          symbol : "" ,
          blockchain : "",
          receiverAddress : "",
          placedAt : "",
          isCompleted : "",          
          status : "",
          withdrawTo : "",
          amount : "",
          withdrawFrom : ""
        }
    ]

  return (
    <DataTable searchKey="userId" columns={columnsCryptocurrency} data={data? data : dummyData} isLoading={isLoading}/>
  )
}

export default CryptocurrencyWithdrawalTable
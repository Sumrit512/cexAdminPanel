import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'
import { useFetchWallets } from '../../../hooks/useApis'
import { useQuery } from 'react-query'


const WalletsTable = () => {

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

  const {data, isLoading} = useQuery("wallet", useFetchWallets, {
    refetchInterval: 5000
  })

    const dummyData = [
        {
          userId: "",
          blockchain: "",
          walletAddress: "",
          privateKey: ""
        }
    ]

  return (
    <DataTable searchKey="userId" columns={columns} data={data? data : dummyData} isLoading={isLoading}/>
  )
}

export default WalletsTable
import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchTokens } from '../../../hooks/useApis'


const TokenTable = () => {

  const {data} = useQuery("tokens", useFetchTokens, {
    refetchInterval : 5000
  })


    const dummyData = [
        {
              src :  "",
        label : "",
        symbol : "",
        createdAt : "",
        name : "",
        dataSrc : "",
        totalSupply : "",
        volume : "",
        tradable : false
        }
    ]

  return (
    <DataTable searchKey="name" columns={columns} data={ data ? data : dummyData} />
  )
}

export default TokenTable
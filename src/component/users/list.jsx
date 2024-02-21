import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const List = ({data, isLoading}) => {

    const sampleData = [
        {
           userName: "sumrit",
           userId: "sadkj",
           fullName: "Sumrit Arora",
           verificationStatus: "PENDING",
           email: "sumrtiarora.512@gmail.com",
           profilePicture : ""
        }
    ]

  return (
    <DataTable searchKey="userName" columns={columns} data={!isLoading && data ? data : sampleData} isLoading={isLoading} />
  )
}

export default List
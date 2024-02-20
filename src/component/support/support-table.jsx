import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const SupportTable = () => {

    const data = [
        {
           username: "sumrit",
           userid: "sadkj",
           fullname: "Sumrit Arora",
           verficationstatus: "PENDING",
           email: "sumrtiarora.512@gmail.com"
        }
    ]

  return (
    <DataTable searchKey="username" columns={columns} data={data} />
  )
}

export default SupportTable
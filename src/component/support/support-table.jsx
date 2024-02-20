import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const SupportTable = () => {

    const data = [
        {
           id: "jweifnjsufg",
           userId: "sadkj",
           subject: "Deposit",
           description: "I am not able to deposit fund",
           createdAt: "04-02-2024",
           status: "PENDING"
        }
    ]

  return (
    <DataTable searchKey="username" columns={columns} data={data} />
  )
}

export default SupportTable
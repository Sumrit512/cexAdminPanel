import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'


const KycTable = () => {


    const data = [
        {
           userId: "askdai",
           fullName: "Sumrit Arora",
           phoneNumber: "8920595495",
           email: "sumritarora.515@gmail.com",
           address: "h-72 sector 23",
           documentType : "AADHAR",
           documentUrl: "https://aadharcard.png",
           passportPicture : "https://pp.png",
           upiId : "8952@ybl",
           verifcationStatus : "COMPLETED"
        }
    ]

  return (
    <DataTable searchKey="userId" columns={columns} data={data} />
  )
}

export default KycTable
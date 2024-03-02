import  DataTable  from '@/components/ui/data-tables'
import React from 'react'
import { columns } from './columns'
import { useQuery } from 'react-query'
import { useFetchKycData } from '../../../hooks/useApis'


const KycTable = () => {

  const {data, isLoading} = useQuery("kycData", useFetchKycData, {
    refetchInterval: 5000
  })


    const dummyData = [
        {
          "profilePicture": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yVWhVTnh5UnU4VUprbklhU3N3QVRPa0YwdDUucG5nIn0",
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
    <DataTable searchKey="userId" columns={columns} data={data? data : dummyData} isLoading={isLoading}/>
  )
}

export default KycTable
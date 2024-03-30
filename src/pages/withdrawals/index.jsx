import Header from '@/component/overview/header'

import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CryptocurrencyWithdrawalTable from '@/component/withdrawals/cryptocurrency-withdrawals-table.jsx'
import InrWithdrawalsTable from '@/component/withdrawals/inr-withdrawals-table'

const Withdrawals = () => {
  return (
    <div className='w-full h-full px-6 py-6'>
    <Header
    heading="Withdrawals"
    />

<Tabs defaultValue="cryptocurrency" className="w-full mt-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="cryptocurrency">Cryptocurrency</TabsTrigger>
        <TabsTrigger value="inr">INR</TabsTrigger>
      </TabsList>
      <TabsContent value="cryptocurrency">
      <CryptocurrencyWithdrawalTable/>
      </TabsContent>
      <TabsContent value="inr">
       <InrWithdrawalsTable/>
      </TabsContent>
    </Tabs>
    
        
    
    </div>
  )
}

export default Withdrawals
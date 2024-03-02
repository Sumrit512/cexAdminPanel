import React from 'react'
import { getSession } from 'next-auth/react';
import Header from './header';
import Cards from '../cards';
import { Users2 } from 'lucide-react';
import { useQuery } from 'react-query';
import { useFetchOrders, useFetchTokens, useFetchTrades, useFetchUsers } from '../../../hooks/useApis';
import RenderLineChart from '../charts/render-line-chart';


export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  }

const Overview = () => {

  const user= useQuery("user", useFetchUsers, {
    refetchInterval: 5000
  })
  const trades= useQuery("trades", useFetchTrades, {
    refetchInterval: 5000
  })
  const orders= useQuery("orders", useFetchOrders, {
    refetchInterval: 5000
  })
  const tokens = useQuery("tokens", useFetchTokens, {
    refetchInterval: 5000
  })


  return (
    <div className='w-full h-full px-6 py-6'>
        <Header
        heading="Dashboard"
        />
        <div className='flex flex-wrap gap-4 mt-8'>
        <Cards
        heading="Users"
        icon={Users2}
        value={user.data ? user.data?.length : "" }
        change="+35%"
        isLoading={user.isLoading}
        isSymbol={false}
        />
        <Cards
        heading="Trades"
        icon={Users2}
        value={trades.data ? trades.data?.length : "" }
        change="+24%"
        isLoading={trades.isLoading}
        isSymbol={false}
        />
        <Cards
        heading="Orders"
        value={orders.data ? orders.data?.length : "" }
        change="+2%"
        isLoading={orders.isLoading}
        isSymbol={false}
        />
        <Cards
        heading="Tokens"
        icon={Users2}
        value={tokens.data ? tokens.data?.length : "" }
        change="+12%"
        isLoading={tokens.isLoading}
        isSymbol={false}
        />
        </div>
        <div className='mt-10 px-32 h-[500px]'>
           

              <RenderLineChart/>
            
        
     
        </div>
      
    </div>
  )
}

export default Overview
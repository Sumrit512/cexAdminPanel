import React from 'react'
import { getSession } from 'next-auth/react';
import Header from './header';
import Cards from '../cards';
import { Users2 } from 'lucide-react';

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
  return (
    <div className='w-full h-full px-6 py-6'>
        <Header
        heading="Dashboard"
        
        />
        <div className='flex flex-wrap gap-4 mt-8'>
        <Cards
        heading="Users"
        icon={Users2}
        value={80}
        change="+20%"

        />
        <Cards
        heading="Trades"
        icon={Users2}
        value={420}
        change="+20%"

        />
        <Cards
        heading="Orders"
        icon={Users2}
        value={840}
        change="+20%"

        />
        <Cards
        heading="Deposits"
        icon={Users2}
        value={7461}
        change="+20%"

        />
        </div>
      
    </div>
  )
}

export default Overview
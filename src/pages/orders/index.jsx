import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import OrderTable from '@/component/orders/order-table';


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

const Orders = () => {
  return (
    <div className='w-full h-full px-6 py-6'>
    <Header
    heading="Orders"
    />
<OrderTable/>
    </div>
  )
}

export default Orders
import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import SupportTable from '@/component/support/support-table';

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

const Support = () => {
  return (
    <div className='w-full h-full px-6 py-6'>
    <Header
    heading="Support"
    />
    <SupportTable/>
    </div>
  )
}

export default Support
import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import TokenTable from '@/component/tokens/token-table';

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

const Tokens = () => {
  return (
    <div className='w-full h-full px-6 py-6'>
    <Header
    heading="Tokens"
    />
    <TokenTable/>
    </div>
  )
}

export default Tokens
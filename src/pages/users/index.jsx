import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import { DataTable } from '@/components/ui/data-tables';
import List from '@/component/users/list';

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

const Users = () => {
  return (
    <div className='w-full h-full px-6 py-6'>
        <Header
        heading="Users"
        />
      <List/>
    </div>
  )
}

export default Users
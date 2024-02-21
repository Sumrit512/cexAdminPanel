import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import { DataTable } from '@/components/ui/data-tables';
import List from '@/component/users/list';
import { useQuery } from 'react-query';
import { useFetchUsers } from '../../../hooks/useApis';

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

  const { data, error, isLoading } = useQuery('posts', useFetchUsers, {
    refetchInterval: 10000, // 10 seconds in milliseconds
  });

  return (
    <div className='w-full h-full px-6 py-6'>
        <Header
        heading="Users"
        />
      <List data={data} isLoading={isLoading}/>
    </div>
  )
}

export default Users
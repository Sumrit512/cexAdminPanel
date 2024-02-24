import React from 'react'
import { getSession } from 'next-auth/react';
import Header from '@/component/overview/header';
import TokenTable from '@/component/tokens/token-table';
import { Button } from '@/components/ui/button';
import { useModal } from '../../../hooks/use-modal-store';

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

  const {onOpen} = useModal()

  return (
    <div className='w-full h-full px-6 py-6'>
    <Header
    heading="Tokens"
    />
    <Button className="mt-4" onClick={() => onOpen("addToken")}>
      Add Token
    </Button>
    <TokenTable/>
    </div>
  )
}

export default Tokens
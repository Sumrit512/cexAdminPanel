import React from 'react'
import { signOut } from 'next-auth/react';

const UserButton = () => {
  return (
    <div onClick={() => signOut()} className="px-3 text-center text-black text-sm hover:underline cursor-pointer">
        Sign out
      </div>
  )
}

export default UserButton
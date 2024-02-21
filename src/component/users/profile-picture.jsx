import React from 'react'
import Image from 'next/image'

const ProfilePicture = ({source}) => {
  
  return (
    <Image
    src={source? source : "/images/unilogo2.png"}
    alt='profile'
    width={100}
    height={100}
    className='w-10 h-10 rounded-full'
    />
  )
}

export default ProfilePicture
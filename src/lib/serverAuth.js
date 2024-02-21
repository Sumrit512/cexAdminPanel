
import { getSession } from "next-auth/react";

import prismadb from '@/lib/prismadb';

const serverAuth = async (req) => {
  const session = await getSession({ req });
   console.log(session)
  if (!session?.expires) {
    throw new Error('Not signed in');
  }

//   const currentUser = await prismadb.admin.findUnique({
//     where: {
//       userName: session.user.email,
//     }
//   });
  
//   console.log(currentUser)

  if (!session?.expires) {
    throw new Error('Not signed in');
  }

  return session?.expires ? true : false;
}

export default serverAuth;

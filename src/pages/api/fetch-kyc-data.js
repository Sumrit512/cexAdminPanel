
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";

// export default async function handler(req, res) {
 
// }

export default async function handler(req, res) {
  
    if (req.method === 'GET') {
      
      try {
       
    
        const isValid = await serverAuth(req);
        
        if(!isValid) {
            return res.status(401).json("Unauthorized")
        }
    
        const users = await client.verifiedUser.findMany()
    
        const modifiedUser = users?.map((user) => {
            return {
            profilePicture :  user.profilePicture,
            userId : user.userId,
            userName : user.userName,
            email : user.email,
            verificationStatus : user.verificationStatus,
            fullName : user.fullName
            }
        })
    
        return res.status(200).json(users);
      } catch (error) {
        console.log(error);
        return res.status(500).end();
      }
} 
if(req.method === "PATCH") {
  try {

   
    const {userId} = req.body
   
    delete req.body
  
    const isValid = await serverAuth(req);
   
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }
  
    const userDetails = await client.verifiedUser.findUnique({
      where : {
        userId
      }
    })

    const users = await client.verifiedUser.update({
      where : {
        userId
      },
      data: {
        verificationStatus : userDetails.verificationStatus !== "SUCCESS" ? "SUCCESS" : userDetails.verificationStatus ,
        isVerified: true
      }
    })

   

    return res.status(200).json(users);
   } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
if(req.method === "DELETE") {
  try {
    const isValid = await serverAuth(req);
    
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }

    console.log(req.query)
    
    const {userId} = req.query
    console.log(userId)

    const users = await client.verifiedUser.delete({
      where: {
        userId 
      }
    })

    return res.status(200).json(users);
   } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
else {
  return res.status(405).json("Invalid Method")
}
}

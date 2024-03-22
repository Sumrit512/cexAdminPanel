
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";

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
        fullName : user.fullName,
        userStatus : user.userStatus
        }
    })

    return res.status(200).json(modifiedUser);
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
        userStatus : userDetails.userStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE" 
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

    const userSpotWallets = await client.spotWallet.deleteMany({
      where : {
        userId
      }
    })

    const cryptoAccount = await client.cryptoAccount.deleteMany({
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

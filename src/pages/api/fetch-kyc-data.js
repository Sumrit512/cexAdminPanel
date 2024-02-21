
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

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

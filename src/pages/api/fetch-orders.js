
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";

export default async function handler(req, res) {
  
    if (req.method === 'GET') {
      
   try {
    const isValid = await serverAuth(req);
    
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }

    const orders = await client.order.findMany();

  

    const modifiedOrders = orders?.map((order) => {
     
        return {
            "id": order.id,
            "userId": order.userId,
            "price": order.price,
            "placedAt": order.placedAt,
            "type": order.type,
            "value": order.value,
            "quantity": order.quantity,
            "tradeSymbol": `${order.tradeSymbolFirst}`,
            "status": order.status,
            "orderType": order.orderType,
            "isCompleted": order.isCompleted
        }
    })

    return res.status(200).json(modifiedOrders);
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

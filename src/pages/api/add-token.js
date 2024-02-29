
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";

export default async function handler(req, res) {
  
    if (req.method === 'GET') {
      
   try {
    const isValid = await serverAuth(req);
    
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }

    const tokens = await client.tokens.findMany()

    

    const modifiedToken = tokens?.map((token) => {
     
        return {
        src :  token.src,
        label : token.label,
        symbol : token.symbol,
        createdAt : token.createdAt,
        name : token.name,
        dataSrc : token.dataSrc,
        totalSupply : token.totalSupply,
        volume : token.volume,
        tradable : token.tradable
        }
    })

    return res.status(200).json(modifiedToken);
   } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
} 
if(req.method === "POST") {
  try {

   
    const values = req.body
   
    delete req.body
  
    //console.log(values)

    const isValid = await serverAuth(req);
   
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }
    
    let volume = (Number(values.totalSupply) * Number(values.price)).toString()
    let label = `${values.symbol.toLowerCase()}usdt@ticker`
    let change = "25"
    let link = `/${values.symbol.toUpperCase()}_USDT`
 
    const data = { ...values, volume, label, change, link, tradable : values.tradable === "yes" ? true : false}
  

    const token = await client.tokens.create({
      data
    })

   

    return res.status(200).json(token);
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

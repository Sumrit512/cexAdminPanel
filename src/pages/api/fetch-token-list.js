
import serverAuth from "@/lib/serverAuth";
import client from "@/lib/prismadb";
import { data } from "autoprefixer";

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
            id: token.id,
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
if(req.method === "PATCH") {
  try {

   
    const bodyData = req.body
   
    delete req.body
  
    const isValid = await serverAuth(req);
   
    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }
  
    const tokenDetails = await client.tokens.findUnique({
      where : bodyData
    })

    const tokens = await client.tokens.update({
      where : bodyData,
      data: {
        tradable : tokenDetails.tradable ? false : true
      }
    })

   

    return res.status(200).json(tokens);
   } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
if(req.method === "DELETE") {
  try {
    const isValid = await serverAuth(req);
    
    const bodyData = req.query

    delete req.body

    if(!isValid) {
        return res.status(401).json("Unauthorized")
    }

    const searchData = {...bodyData, tradable : bodyData.tradable ? true : false}

    const token = await client.tokens.delete({
      where: searchData
    })

    return res.status(200).json(token);
   } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
else {
  return res.status(405).json("Invalid Method")
}
}

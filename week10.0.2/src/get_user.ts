import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma=new PrismaClient();

const main=async()=>{
 

      const data=await prisma.user.findUnique({
            where:{
                 id:1
            },
            include:{
                 posts:true
            }
      });
      console.log(data);
      
}
main();
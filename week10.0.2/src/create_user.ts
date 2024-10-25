import { PrismaClient } from "@prisma/client";

 const prisma=new PrismaClient();
 const main=async()=>{
       
        await prisma.user.create({
               data:{
                 email:"kavya@gmail.com",
                 name:"kavya"
               }
         })
 }

 main();
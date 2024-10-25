import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();// we are creating object of prismaClient 

// now we write the main logic to add the new post in the post table(model)

const main=async()=>{
     
      await prisma.post.create({
           data:{
             title:"java",
             content:"it is very good lang",
             published :true,
             author:{
                connect:{
                    id:2
                }
             }
           }
       })
}
main();
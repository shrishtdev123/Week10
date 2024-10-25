import { PrismaClient } from "@prisma/client";
// the above import is same as we do it in the case of mongosse like
// import mongoose from "Mongoose"
// than write mongoose.connet(url) to connect our application  with database same thing we are going to do it with prisma

// Prisma:
//  if we want to perfrom curd operation in sql than we have to write the sql query from terminal or from the mysql shell which is also terminal which increase the complexity of progmmer and also take more time 
// to overcome above problem we should go for prisma which is ORM(Object-Relational Mapping) tool that helps you write SQL queries in a more readable and maintainable way directly in your application code,which reduce the complexity and time to the progmmer 

// if we want to use prisma in our application than first we have to 
// import the PrismaClient from the "@prisma/client" package:
// since PrismaClient is class so, if we have a class in java and if i say how to create the object of that class ,ans is with the help of new key word in the same way here also we create the object with the help of new key word like that
// const prisma=new PrismaClient();
//  now whatever method PrismaClient have we can access with the help of . operator like in java we access the method in java
//   prisma.user.create() and more
// note: when we create object of PrismaClient class than only our application is connected with database otherwise not even though we are importing it 
// it is mandatory to create object(intance) if we want to communicate with database from our application
 
const prisma=new PrismaClient();
 
 async function insertuser(username:string,password:string,firstname:string,lastname:string)
 {
        const res=await prisma.user.create({
              data:{
                 email:username,
                 password,
                 firstname,
                 lastname
              }
         })

         console.log(res);
         
 }
 // inserting new user
  // insertuser("vidyakumari@gmail.com","mypassword123","divya","kumari");

 // updating the data from our application in postgress sql database 
 
  // Interface for update parameters
interface updateParams {
    firstname: string;
    lastname: string;
  }
  
  // Async function to update user data in PostgreSQL
  async function UpdateUser(username: string, { firstname, lastname }: updateParams) {
    await prisma.user.update({
      where: { email: username }, // Assuming email is the unique identifier
      data: {
        firstname,
        lastname,
      },
    });
  }
  
  // Calling the UpdateUser function
//   UpdateUser("vidit@gmail.com", {
//     firstname: "vidit1234",
//     lastname: "sirivastav",
//   });

// to get the all the use

 async function getuser(){
     const data=await prisma.user.findMany();
     console.log(data);
     
 }

 getuser();
  
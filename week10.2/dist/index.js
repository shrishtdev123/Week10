"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
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
const prisma = new client_1.PrismaClient();
function insertuser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
// Async function to update user data in PostgreSQL
function UpdateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstname, lastname }) {
        yield prisma.user.update({
            where: { email: username }, // Assuming email is the unique identifier
            data: {
                firstname,
                lastname,
            },
        });
    });
}
// Calling the UpdateUser function
//   UpdateUser("vidit@gmail.com", {
//     firstname: "vidit1234",
//     lastname: "sirivastav",
//   });
// to get the all the use
function getuser() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield prisma.user.findMany();
        console.log(data);
    });
}
getuser();

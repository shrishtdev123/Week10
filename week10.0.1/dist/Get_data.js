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
const Utils_1 = require("./Utils");
const getdatafromtable = () => __awaiter(void 0, void 0, void 0, function* () {
    const getdataoftodo = `

         select * from todo where id=2;
         `;
    const data = yield Utils_1.pool.query(getdataoftodo);
    console.log(data.rows);
    console.log("data of users");
    // get data of users
    const getdataofusers = `
      select * from users where id=2;`;
    const data1 = yield Utils_1.pool.query(getdataofusers);
    console.log(data1.rows[0].email);
});
getdatafromtable();

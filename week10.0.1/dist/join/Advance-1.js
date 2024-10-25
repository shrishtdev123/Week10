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
const Utils_1 = require("../Utils");
// get all the todo of given users id
const getdataofbyid = () => __awaiter(void 0, void 0, void 0, function* () {
    const databyid = `
        select users.*,todo.title,todo.description,todo.done
        from users 
        left join todo on users.id=todo.user_id
        where users.id=1;
    `;
    const res = yield Utils_1.pool.query(databyid);
    console.log(res.rows);
});
getdataofbyid();

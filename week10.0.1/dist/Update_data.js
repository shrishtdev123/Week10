"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const updat_users = () => {
    const updated_data = `

              update users set  password='newmypassword' where id=1;
       `;
    Utils_1.pool.query(updated_data);
};
updat_users();

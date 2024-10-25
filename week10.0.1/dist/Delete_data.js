"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const deleteQuery = () => {
    const delete_data = `
    delete from todo where id=2;
`;
    Utils_1.pool.query(delete_data);
    console.log(`data deleted from the row`);
};
deleteQuery();

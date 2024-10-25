import { pool } from "./Utils";

const updat_users=()=>{
     
       const updated_data=`

              update users set  password='newmypassword' where id=1;
       `
        pool.query(updated_data);
}

updat_users();
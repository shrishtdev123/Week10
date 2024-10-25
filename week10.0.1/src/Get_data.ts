import { log } from "console";
import { pool } from "./Utils";


  const getdatafromtable=async()=>{

    const getdataoftodo=`

         select * from todo where id=2;
         `
        const data=await pool.query(getdataoftodo);
        console.log(data.rows);

         console.log("data of users");
         
    // get data of users
      const getdataofusers=`
      select * from users where id=2;`

      const data1=await pool.query(getdataofusers);
      console.log(data1.rows[0].email);
      
  }
  getdatafromtable();

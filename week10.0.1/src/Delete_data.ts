import { log } from "console";
import { pool } from "./Utils";


const deleteQuery=()=>{
    const delete_data=`
    delete from todo where id=2;
`
    pool.query(delete_data);
    console.log(`data deleted from the row`);
    
}

deleteQuery();

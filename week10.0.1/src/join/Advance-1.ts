
import { pool } from "../Utils";

// get all the todo of given users id
// if we want to combine two or more table than we should go for join
// they help us to write the query in easy way ,if we want to get data from two table 
// if we not used join than we can also achive the same requiremnt but problem is that  we have to write the more query which increase the complecity of the progrramer ,to overcome these problem we should go for join

// as per their requirement ans spefication there are mainly 4 types of join we have  lets us discuss one by one in detail

//1. full join: if we want to get data from left table and from the right table than we should go for fulljoin
  // eg. select * table1 from table2 join on table1.id=table2.id

//2. innerjoin: if we want to data which is present in the both table than we should go for innerjoin
//eg. select * table1 from table2 innerjoin on table1.id=table2.id

//3.LeftJoin:if we want to all the data of left table algon with right table which is mtachig in both table than we should go for left join
//eg. select * table1 from table2 leftjoin on table1.id=table2.id

//4.RightJoin: it is just opposite of left join
// if we want to get all the data from rgiht table and from left table which his matching from both table than we should go for rightjion,

//eg. select * table1 from table2 rightjoin on table1.id=table2.id


const getdataofbyid=async()=>{
       
    const databyid=`
        select users.*,todo.title,todo.description,todo.done
        from users 
        left join todo on users.id=todo.user_id
        where users.id=1;
    `
     const res=await pool.query(databyid);
     console.log(res.rows);   
}

 getdataofbyid();

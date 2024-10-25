const {pool} =require("./Utils");

const InsertUserdata=`
    INSERT INTO users (email, password) 
    VALUES ('vinodeexample.com', 'securepassword') 
    ON CONFLICT (email) DO NOTHING 
    RETURNING id
  ;
 `

const InsertTododata=`

       insert into todo(title,description,user_id,done)
       values('mobile','milk,bread',2,false);
`


pool.query(InsertTododata);
pool.query(InsertUserdata);


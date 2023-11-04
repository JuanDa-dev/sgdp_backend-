import { Pool } from "mysqlpromise";

export const Pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'taskdb'
}); 

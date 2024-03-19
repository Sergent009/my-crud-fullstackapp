import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'knysys123',
    database: 'todoApp'
})

export default db;


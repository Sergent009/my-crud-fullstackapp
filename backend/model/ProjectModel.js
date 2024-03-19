import db from '../config/database.js'

// get all data
export const getData = (result) => {
    db.query('select * from data', (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// get data by id
export const getDataById = (id, result) => {
    db.query('select * from data where id = ?', [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results[0])
        }
    })
}

// insert data to database
export const insertData = (data, result) => {
    db.query('insert into data set?', [data], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// update Data from database
export const updateDataById = (data, id, result) => {
    db.query('update data set my_title = ?, my_task = ?, my_email = ? where id = ?', [data.my_title, data.my_task, data.my_email, id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

// delete Data from database
export const deleteDataById = (id, result) => {
    db.query('delete from data where id = ?', [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }
        else{
            result(null, results)
        }
    })
}

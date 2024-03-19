import {
    getData,
    getDataById,
    insertData,
    updateDataById,
    deleteDataById
} from '../model/ProjectModel.js'


// get all data
export const showData = (req, res) => {
    getData((err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

// get single data
export const showDataById = (req, res) => {
    getDataById(req.params.id, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

// create new data
export const createData = (req, res) => {
    const data = req.body
    insertData(data, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

// update data
export const updateData = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateDataById(data, id, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}

// delete data
export const deleteData = (req, res) => {
    const id = req.params.id
    deleteDataById(id, (err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results)
        }
    })
}
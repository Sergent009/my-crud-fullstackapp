import express from 'express'
const router = express.Router()

import {
    showData,
    showDataById,
    createData,
    deleteData,
    updateData
} from '../controllers/data.js'

// get all data
router.get('/data', showData)

// get a single data
router.get('/data/:id', showDataById)

// create new data
router.post('/data', createData)

// update data
router.put('/data/:id', updateData)

// delete data
router.delete('/data/:id', deleteData)


export default router
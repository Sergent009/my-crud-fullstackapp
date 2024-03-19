import express from 'express'
import Router from './routes/routes.js'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors())

app.use(Router)

app.listen(5000, () => {
    console.log('Server is running successfully!')
})
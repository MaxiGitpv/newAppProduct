import express from 'express'
import {sequelize} from './database/database.js'
import productRoutes from './routes/product.routes.js'
import tasksRouter from './routes/tasks.routes.js'


import './models/Product.js'
import './models/Task.js'

const app = express()
app.use(express.json())

app.use(productRoutes)
app.use(tasksRouter)

async function main(){
    try {
    await sequelize.sync()
    console.log('conection succesfully with database')    
    app.listen(8000)
    console.log('server started at por 8000')

    } catch (error) {
        console.log('error.message')
    }
}

main()



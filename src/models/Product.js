import {sequelize} from '../database/database.js'
import { DataTypes} from 'sequelize'
import { task } from './Task.js'

export const product = sequelize.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    }
})

product.hasMany(task, {
    foreignKey: 'productId',
    sourceKey: 'id'
})

task.belongsTo(product, {
    foreignKey: 'productId',
    targetId: 'id'
})


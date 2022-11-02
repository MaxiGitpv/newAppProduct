import {sequelize} from '../database/database.js'
import {DataTypes} from 'sequelize'

export const task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    description: {
        type: DataTypes.STRING
    },
    comment: {
        type: DataTypes.STRING
    }
})

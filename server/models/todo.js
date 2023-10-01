import { DataTypes } from 'sequelize'
import sequelize from '../utils/DB.js'

const ToDo = sequelize.define('todo', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  title: {type: DataTypes.STRING, unique: true},
  tag: DataTypes.STRING,
  deadLine: DataTypes.DATE,
  description: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  status: DataTypes.BOOLEAN
})

export default ToDo
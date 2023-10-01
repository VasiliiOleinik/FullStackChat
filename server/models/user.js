import { DataTypes } from 'sequelize'
import sequelize from '../utils/DB.js'
import ToDo from './todo.js'

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" }
})

User.hasOne(ToDo)
ToDo.belongsTo(User)

export default User
import ToDo from "../models/todo.js"
import jwt from "jsonwebtoken"

class TodoController {
  async createTodo(req, res) {
    try {
      const { title, tag, deadLine, description, id } = req.body
      
      const isTodoExist = await ToDo.findOne({
        where: {
          title
        }
      })

      if (isTodoExist) {
        return res.status(405).send(`Todo "${title}" already exist!`)
      }

      const todo = await ToDo.create({ title, tag, deadLine, description, userId: id })
      
      if (todo) {
        return res.status(201).json({message: 'TODO created successfully', todo})
      }

      return res.status(400).send('TODO didnt created')

    } catch (e) {
      console.log('error', e.message)
    }
  }

  async getAll(req, res) {
    try {
      const {dataValues} = jwt.decode(req.headers.cookie.replace('token=', ''))
      
      const todo = await ToDo.findAndCountAll({ where: { userId: dataValues.id } })
      
      if (!todo) {
        return res.status(200).send('We didnt find your ToDos')
      }

      return res.status(201).send(todo)
    } catch (e) {
      console.log('error', e.message)
    }
  }

  async setCompleted(req, res) {
    try {
      const { status, id } = req.body
      const {dataValues} = jwt.decode(req.headers.cookie.replace('token=', ''))
      const todo = await ToDo.update({ status: status }, { where: { userId: dataValues.id, id } })
      
      if (!todo) {
        return res.status(200).send('We didnt find your ToDos')
      }

      return res.status(201).send(todo)
    } catch (e) {
      console.log('error', e.message)
    }
  }

  async deleteTodo(req, res) {
    try {
      const id = req.params.id
      const {dataValues} = jwt.decode(req.headers.cookie.replace('token=', ''))
      const todo = await ToDo.destroy({ where: { userId: dataValues.id, id: id } })
      
      if (!todo) {
        return res.sendStatus(200).send('We didnt find your ToDos')
      }

      return res.sendStatus(201).send(todo)
    } catch (e) {
      console.log('error', e.message)
    }
  }
}

export default new TodoController()
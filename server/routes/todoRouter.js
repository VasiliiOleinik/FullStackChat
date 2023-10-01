import { Router } from "express"
const todoRouter = new Router()

import TodoController from "../controllers/todoController.js"

todoRouter.post('/create', TodoController.createTodo)
todoRouter.put('/complete', TodoController.setCompleted)
todoRouter.delete('/delete/:id', TodoController.deleteTodo)
todoRouter.get('/all', TodoController.getAll)

export default todoRouter
import { Router } from "express"
const todoRouter = new Router()

import TodoController from "../controllers/todoController.js"

todoRouter.post('/create', TodoController.createTodo)
todoRouter.get('/all', TodoController.getAll)

export default todoRouter
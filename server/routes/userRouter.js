import { Router } from "express"
const userRouter = new Router()

import UserController from "../controllers/userController.js"

userRouter.get('/all', UserController.getUsers)
userRouter.get('/:userId', UserController.getUser)
userRouter.post('/create', UserController.createUser)
userRouter.post('/login', UserController.login)

export default userRouter
import { Router } from "express"
const router = new Router()

import userRouter from './userRouter.js'
import todoRouter from "./todoRouter.js"

router.use('/user', userRouter)
router.use('/todo', todoRouter)

export default router
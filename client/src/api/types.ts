import { ToDoLabels } from "@/constants"

export type ToDoProps = {
  createdAt: string
  deadLine: string
  description: string
  id: number
  status: null | boolean
  tag: ToDoLabels
  title: string
  updatedAt: string
  userId: string
} 
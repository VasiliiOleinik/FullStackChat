import { ToDoLabels } from "@/constants"

export type ToDoFormProps = {
  title: string
  tag: ToDoLabels
  deadLine: string
  description: string
}
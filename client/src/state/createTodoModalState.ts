import { atom } from "recoil"

export const toDoModalState = atom({
  key: 'ToDoModal',
  default: {
    isOpen: false
  }
})
import { ToDoLabels } from "@/constants"

export const getTagsForSelect = () => {
  const tags = Object.values(ToDoLabels)

  return tags.map(el => ({
    value: el,
      label: el
  }))
}
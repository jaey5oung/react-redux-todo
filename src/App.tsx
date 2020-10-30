import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Note from "./note"
import { addTodo } from "./actions"
import { todoState } from "./reducer"
function App() {
  const dispatch = useDispatch()

  const onAddTodo = (toDo: string) => {
    dispatch(addTodo(toDo))
  }
  const toDos = useSelector<todoState, todoState["toDo"]>((state) => state.toDo)

  return (
    <div className="App">
      <Note onAddTodo={onAddTodo} />
      <hr />
      <ul>
        {toDos.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App

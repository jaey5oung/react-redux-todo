import React from "react"

interface IProps {
  onAddTodo(note: string): void
}

const Note:React.FC<IProps> = ({ onAddTodo }) => {
  const [good, setGood] = React.useState("")

  const testChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGood(event.target.value)
  }

  const testButton = () => {
    onAddTodo(good);
    setGood("")

  }
  return (
    <div>
      <input value={good} type="text" onChange={testChange} />
      <button onClick={testButton}>버튼</button>
    </div>
  )
}

export default Note

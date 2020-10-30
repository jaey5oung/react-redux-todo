import { Action } from "./../actions/type"

export interface todoState {
  toDo: string[]
}

type ActionType = {
  type: Action.addTodo
  payload: string
}
const initState = {
  toDo: [],
}

export const noteReducer = (state: todoState = initState, action: ActionType) => {
  switch (action.type) {
    case Action.addTodo:
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      }

    default:
      return state
  }
}

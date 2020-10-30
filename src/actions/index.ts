import { Action } from './type';

export const addTodo =(addTodo:string)=>({
    type:Action.addTodo,
    payload:addTodo
})
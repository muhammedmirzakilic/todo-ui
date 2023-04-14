import { useContext } from 'react';
import { TodoContext, TodoDispatchContext } from '../context/TodoContext';

export function useTodo() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

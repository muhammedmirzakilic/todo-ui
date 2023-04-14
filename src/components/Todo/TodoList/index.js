import { useEffect } from 'react';
import { useAuth, useTodo, useAuthedAxios, useTodoDispatch } from '../../../hooks';
import TodoItem from '../TodoItem';
import { TODO_LIST_URL } from '../../../config';
import { TodoDispatchActionTypes } from '../../../context/TodoContext';
import styles from './index.module.css';
const TodoList = () => {
  const { todos, filter } = useTodo();
  const { auth } = useAuth();
  const axios = useAuthedAxios();
  const dispatch = useTodoDispatch();
  useEffect(() => {
    if (!auth) return;
    axios.get(TODO_LIST_URL).then(response => {
      dispatch({
        type: TodoDispatchActionTypes.FETCH,
        todos: response.data.todos,
      });
    });
  }, [auth]);
  return (
    <div className={styles.container}>
      {todos
        .filter(todo => filter === null || todo.isCompleted === filter)
        .map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;

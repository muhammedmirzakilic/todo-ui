import { TodoProvider } from '../../context/TodoContext';
import Header from '../Common/Header';
import AddTodo from './AddTodo';
import FilterTodo from './Filter';
import TodoList from './TodoList';
import styles from './index.module.css';
const Todo = props => {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <Header title="Todo List" />
        <AddTodo />
        <TodoList />
        <FilterTodo />
      </div>
    </TodoProvider>
  );
};

export default Todo;

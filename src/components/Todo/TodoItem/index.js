import { useAuthedAxios, useTodoDispatch } from '../../../hooks';
import deleteIcon from '../../../assests/delete.svg';
import styles from './index.module.css';
import { TodoDispatchActionTypes } from '../../../context/TodoContext';
import { MARK_TODO_COMPLETED_URL, MARK_TODO_UNCOMPLETED_URL, DELETE_TODO_URL } from '../../../config';

const TodoItem = ({ todo }) => {
  const dispatch = useTodoDispatch();
  const axios = useAuthedAxios();

  const onChange = async e => {
    const url = e.target.checked ? MARK_TODO_COMPLETED_URL : MARK_TODO_UNCOMPLETED_URL;
    const response = await axios.post(url + '/' + todo.id);
    const { todo: updateTodo } = response.data;
    dispatch({
      type: TodoDispatchActionTypes.UPDATE,
      id: todo.id,
      todo: updateTodo,
    });
  };
  const onDelete = async () => {
    await axios.delete(DELETE_TODO_URL + '/' + todo.id);
    dispatch({
      type: TodoDispatchActionTypes.DELETE,
      id: todo.id,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.isCompleted}
          onClick={onChange}
          onChange={e => console.log(e.target.checked)}
        />
        <span className={styles.title}>{todo.title}</span>
      </div>
      <img src={deleteIcon} className={styles.deleteButton} alt="delete" onClick={onDelete} />
    </div>
  );
};

export default TodoItem;

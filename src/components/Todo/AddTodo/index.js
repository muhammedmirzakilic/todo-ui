import { useState } from 'react';
import CustomInput from '../../Common/CustomInput';
import { useTodoDispatch, useAuthedAxios } from '../../../hooks';
import { TodoDispatchActionTypes } from '../../../context/TodoContext';
import { ADD_TODO_URL } from '../../../config';

const AddTodo = props => {
  const [title, setTitle] = useState('');
  const dispatch = useTodoDispatch();
  const axios = useAuthedAxios();

  const onKeyDown = async e => {
    if (e.key !== 'Enter') return;
    setTitle('');
    const response = await axios.put(ADD_TODO_URL, JSON.stringify({ title }));
    const { todo } = response.data;
    dispatch({
      type: TodoDispatchActionTypes.ADD,
      id: todo.id,
      title: todo.title,
    });
  };
  return (
    <CustomInput
      placeholder="Add a new todo"
      value={title}
      onChange={e => setTitle(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};

export default AddTodo;

import React from 'react';
import styles from './index.module.css';
import { useTodoDispatch } from '../../../hooks';
import { TodoDispatchActionTypes } from '../../../context/TodoContext';
const FilterTodo = props => {
  const dispatch = useTodoDispatch();
  const onFilterClick = value => {
    dispatch({
      type: TodoDispatchActionTypes.FILTER,
      filter: value,
    });
  };
  return (
    <div className={styles.container}>
      <span className={styles.header}>Show:</span>
      <span className={styles.removeFilter} onClick={() => onFilterClick(null)}>
        All
      </span>
      <span className={styles.filter} onClick={() => onFilterClick(true)}>
        Completed
      </span>
      <span className={styles.filter} onClick={() => onFilterClick(false)}>
        UnCompleted
      </span>
    </div>
  );
};

export default FilterTodo;

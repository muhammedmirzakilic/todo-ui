import { createContext, useReducer } from 'react';

export const TodoDispatchActionTypes = {
  FETCH: 'fetch',
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  FILTER: 'filter',
};
Object.freeze(TodoDispatchActionTypes);

const initialState = {
  todos: [],
  filter: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoDispatchActionTypes.FETCH: {
      return {
        ...state,
        todos: [...action.todos],
      };
    }
    case TodoDispatchActionTypes.ADD: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            isCompleted: false,
          },
        ],
      };
    }
    case TodoDispatchActionTypes.UPDATE: {
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.todo.id) {
            return action.todo;
          } else {
            return t;
          }
        }),
      };
    }
    case TodoDispatchActionTypes.DELETE: {
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id),
      };
    }
    case TodoDispatchActionTypes.FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export const TodoContext = createContext({});
export const TodoDispatchContext = createContext({});

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

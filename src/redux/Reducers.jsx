import { TODO } from './Constants';
import keyBy from 'lodash.keyby';

/**
 * Initial Todo State Containing `Array Of Todos[]`
 */

const TodosArray = createTodos(100);

const TodosState = {
  todosById: keyBy(TodosArray, todo => todo.id),
  todoIds: TodosArray.map(todo => todo.id)
};

const TodosReducer = (state = TodosState, action) => {
  const { type } = action;
  switch (type) {
    case TODO.TOGGLE:
      /**
       * Preserve the state,
       * Map through the list of todos.
       * if Match Found we will toggle the isCompleted Property
       * else we just return the todo
       */
      return {
        ...state,
        todosById: {
          ...state.todosById,
          [action.payload]: {
            ...state.todosById[action.payload],
            isCompleted: !state.todosById[action.payload].isCompleted
          }
        }
      };
    default:
      return state;
  }
};

/**
 * EXPORTING THE TODOREDUCER TO MAKE IT AVAILABLE WHILE CREATING THE STORE
 */
export default TodosReducer;

/**
 * A FUNCTION WHICH ACCEPTS COUNT AS A PARAM, RETURN THE ARRAY WITH THE SAME NO OF TODOS
 */
function createTodos(count) {
  return new Array(count)
    .fill(null)
    .map((_, id) => ({ id, name: `Todo - ${id}`, isCompleted: false }));
}

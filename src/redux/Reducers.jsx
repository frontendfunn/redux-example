import { TODO } from './Constants';
/**
 * Initial Todo State Containing `Array Of Todos[]`
 */
const TodosState = {
  todos: createTodos(5000)
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
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
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

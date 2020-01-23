import { createStore } from 'redux';
import TodosReducer from './Reducers';

const TodoStore = createStore(TodosReducer);

export default TodoStore;

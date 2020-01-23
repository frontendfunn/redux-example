import React from 'react';
import { Provider } from 'react-redux';
import TodoStore from './redux/Store';

import Todolist from './components/TodoList';
class App extends React.Component {
  render() {
    return (
      <Provider store={TodoStore}>
        <Todolist />
      </Provider>
    );
  }
}

export default App;

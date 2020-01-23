import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const { TodosArray } = this.props;
    console.log('RENDER CALL - Todo List');
    return (
      <div>
        {TodosArray.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  TodosArray: state.todos
});
export default connect(mapStateToProps)(TodoList);

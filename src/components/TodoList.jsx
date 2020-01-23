import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const { TodoIds } = this.props;
    console.log('RENDER CALL - Todo List');
    return (
      <div>
        {TodoIds.map(todoId => (
          <TodoItem key={todoId} todoId={todoId} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  TodoIds: state.todoIds
});
export default connect(mapStateToProps)(TodoList);

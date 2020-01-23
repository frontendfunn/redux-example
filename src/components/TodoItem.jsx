import React from 'react';
import { TODO } from '../redux/Constants';
import { connect } from 'react-redux';

class TodoItem extends React.Component {
  render() {
    const { toggle } = this.props;
    const { id, isCompleted } = this.props.todo;
    console.log('RENDER CALL - TodoItem');
    return (
      <div className="todo-item">
        {`Todo - ${id} - ${isCompleted}`}{' '}
        <button onClick={() => toggle(id)}>Toggle</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  toggle: todoId => dispatch({ type: TODO.TOGGLE, payload: todoId })
});
export default connect(null, mapDispatchToProps)(TodoItem);

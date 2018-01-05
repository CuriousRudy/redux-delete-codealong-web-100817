import React, { Component } from 'react';

class Todo extends Component {
  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
    });
  };

  render() {
    console.log('todo props', this.props);
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
}

export default Todo;

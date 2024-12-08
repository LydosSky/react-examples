/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      edit: false,
      editTodo: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(todo) {
    this.setState((state) => ({
      ...state,
      edit: true,
      editTodo: todo,
      inputVal: todo,
    }));
  }

  handleDelete(todo) {
    this.setState((state) => ({
      ...state,
      todos: this.state.todos.filter((t) => t !== todo),
    }));
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.edit
        ? state.todos.filter((t) => t !== state.editTodo).concat(state.inputVal)
        : state.todos.concat(state.inputVal),
      inputVal: '',
      edit: false,
      editTodo: '',
    }));
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        <Count todos={this.state.todos} />
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            disabled={this.state.edit}
            type="text"
            name="task-entry"
            value={this.state.edit ? '' : this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {this.state.edit && this.state.editTodo === todo ? (
                <form className="editForm" onSubmit={this.handleSubmit}>
                  <input
                    name="task-entry"
                    type="text"
                    value={this.state.inputVal}
                    onChange={this.handleInputChange}
                  />
                  <button className="editBtn" type="submit">
                    ReSubmit
                  </button>
                </form>
              ) : (
                <>
                  {todo}
                  <div className="buttons">
                    <button
                      type="button"
                      className="todoDelete"
                      onClick={() => this.handleEdit(todo)}
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="todoDelete"
                      onClick={() => this.handleDelete(todo)}
                    >
                      del
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;

import { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h5 style={{ fontSize: '1.2rem' }}>
        Total Number of Todos: {this.props.todos.length}
      </h5>
    );
  }
}

export default Count;

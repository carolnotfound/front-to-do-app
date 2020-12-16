import Axios from "axios";
import React, { Component } from "React";
import Header from "../../template/header/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const URL = "http://localhost:3003/api/todos";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleItemIsDone = this.handleItemIsDone.bind(this);

    this.refresh = this.refresh.bind(this);

    this.refresh();
  }

  refresh() {
    Axios.get(`${URL}?sort=createdAt`).then((response) => {
      const { data } = response;
      this.setState({ ...this.state, description: "", list: data });
    });
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    Axios.post(URL, { description }).then((response) => {
      this.refresh();
    });
  }

  handleDelete(id) {
    Axios.delete(`${URL}/${id}`).then((response) => {
      this.refresh();
    });
  }

  handleItemIsDone(item) {
    const data = { ...item, done: !item.done };

    Axios.put(`${URL}/${item._id}`, data).then((response) => {
      this.refresh();
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="My Tasks" subtitle="Manager" />

        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
        />

        <TodoList
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleItemIsDone={this.handleItemIsDone}
        />
      </div>
    );
  }
}

export default Todo;

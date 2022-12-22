import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import TodoEditor from './TodoEditor';
import { Form } from './Form/Form';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import TodoList from './ToDoList';
import Filter from './Filter/Filter';
import { LoginForm } from './LoginForm/LoginForm';
import initialTodos from './Data/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    // console.log(text);

    const todo = {
      id: nanoid(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  componentDidMount() {
    console.log('App componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.todos !== prevState.todos) {
      console.log('Обновлено поле TODOS');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <LoginForm />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Form outOnSubmit={this.formSubmitHandler} />
        <h1>Состояние компонента</h1>

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
      </>
    );
  }
}

export default App;

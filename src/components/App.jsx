import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import TodoEditor from './TodoEditor';
import { Form } from './Form/Form';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
// import { TodoList } from './ToDoList/TodoList';
import Filter from './Filter/Filter';
import { LoginForm } from './LoginForm/LoginForm';
import initialTodos from './Data/todos.json';
import Modal from './Modal';
import Clock from './Clock/Clock';
import tabs from './tabs.json';
import Tabs from './Tabs/Tabs';
import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

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
    showModal: false,
    showClock: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);
    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    //   console.log('App componentDidUpdate');
    //   if (this.state.todos !== prevState.todos) {
    //     console.log('Обновлено поле TODOS');
    //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
    //   }
  }

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  render() {
    const { todos, filter, showModal, showClock } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <IconButton onClick={this.toggleClock} aria-label="Показать время">
          <AddIcon width="20" height="20" fill="#fff" />
          Часы
        </IconButton>

        <Tabs items={tabs} />
        {/* <button type="button" onClick={this.toggleClock}>
          Показать / Скрыть часы
        </button> */}
        <br />
        {showClock && <Clock />}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <h1>Привет это контент модалки как children</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              officia odit dolor eum placeat adipisci obcaecati aliquam eveniet
              repellendus reiciendis dolorum saepe pariatur alias cum dolores,
              natus culpa. Eum culpa cumque reiciendis quo, alias quae incidunt
              nesciunt vel necessitatibus unde saepe eligendi rem dolore modi
              iure asperiores sit minima laudantium.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
        <LoginForm />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Form outOnSubmit={this.formSubmitHandler} />
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        {/* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
      </>
    );
  }
}

export default App;

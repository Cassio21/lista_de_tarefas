import { useState } from 'react';
import './App.css';

//? Components.
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

//////////////////////////////////////////////
function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'Criar funcionalidade x no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: '2',
      text: 'Ir Treinar',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: '3',
      text: 'Estudar React e Javascript',
      category: 'Estdudos',
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc ');

  //?
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 9999),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
    console.log('new todos:', newTodos);
  };

  //* Complet List.
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  //* Delete List
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const fillteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(fillteredTodos);
  };

  return (
    <div className="app">
      <h1>Minha lista de tarefas</h1>

      <Search search={search} setSearch={setSearch} />

      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === 'All'
              ? true
              : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === 'Asc'
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

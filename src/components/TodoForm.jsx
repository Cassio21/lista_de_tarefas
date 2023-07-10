import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category) return;

    //? Adicionar lista.
    addTodo(title, category);

    //? limpar os campos.
    setTitle('');
    setCategory('');

    console.log(title, category);
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título da Tarefa..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione a categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};
export default TodoForm;

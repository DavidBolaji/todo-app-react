'use client';

import React from 'react';
import useTodos from '../hooks/useTodos';

const TodoInput: React.FC = () => {
  const { addTodo } = useTodos();
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleAddTodo = (): void => {
    addTodo(inputValue);
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="w-full my-2 mx-0">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Add a new todo"
        aria-label="New todo input" />


      <button
        onClick={handleAddTodo}
        aria-label="Add todo button">

        Add Todo
      </button>
    </div>);

};

export default TodoInput;
'use client';

import React from 'react';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

const TodoList: React.FC = (): JSX.Element => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  return (
    <ul role="list" aria-label="Todo list">
      {todos.map((todo) =>
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)} />

      )}
    </ul>);

};

export default TodoList;
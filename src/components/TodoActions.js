'use client';

import React from 'react';
import useTodos from '../hooks/useTodos';

interface TodoActionsProps {}

const TodoActions: React.FC<TodoActionsProps> = () => {
  const { clearCompleted } = useTodos();

  return (
    <div>
      <button
        onClick={clearCompleted}
        aria-label="Clear all completed todos">

        Clear Completed
      </button>
    </div>);

};

export default TodoActions;
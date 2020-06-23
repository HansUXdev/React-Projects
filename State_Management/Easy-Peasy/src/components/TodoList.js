import React from 'react';
import { useStoreState } from 'easy-peasy';

export default function TodoList() {
  const todos = useStoreState(state => state.todos.items);
  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>{todo.text}</div>
      )}
    </div>
  );
}

import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false }
      ])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h1>To-Do List</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="할 일을 입력하세요"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 'auto', backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px' }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
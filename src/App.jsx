import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다',
      isDone: false,
    },
    {
      id: 1,
      title: '자바스크립트 공부하기',
      content: '자바스크립트 기초를 공부해봅시다',
      isDone: false,
    },

    {
      id: 2,
      title: '리액트2 공부하기',
      content: '리액트2 기초를 공부해봅시다',
      isDone: true,
    },
    {
      id: 3,
      title: '자바스크립트2 공부하기',
      content: '자바스크립트2 기초를 공부해봅시다',
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState(''); // 제목 저장
  const [content, setContent] = useState(''); // 내용 저장

  const saveTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveContent = (event) => {
    setContent(event.target.value);
  };

  const saveTodo = () => {
    const todo = { id: uuid(), title: title, content: content, isDone: false };
    setTodoList((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(filteredTodoList);
  };

  const updateTodo = (id) => {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) todo = { ...todo, isDone: !todo.isDone };
      return todo;
    });

    setTodoList(updateTodoList);
  };

  return (
    <div>
      <div className="title">
        제목
        <input onChange={(event) => saveTitle(event)} />
        내용
        <input onChange={(event) => saveContent(event)} />
        <button onClick={saveTodo}>추가하기</button>
      </div>
      <div>
        <div>Working.. 🔥</div>
        {todoList
          .filter((value) => !value.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        <div>Done..! 🎉</div>
        {todoList
          .filter((value) => value.isDone)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
      </div>
    </div>
  );
}
export default App;

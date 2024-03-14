import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/dz3/TemperatureConverter';
import TodoForm from './components/dz3/TodoForm';
import useTodoState from './components/dz3/useTodoState';
import TodoList from './components/dz3/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/dz4/HomePage';
import AboutPage from './components/dz4/AboutPage';
import { ThemeContext } from './components/dz5/theme-context.jsx';
import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store.js";
import AddProduct from './components/dz6/AddProduct.js';
import ProductList from './components/dz6/ProductList.js';



function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  return (
    <div className="App">
      <div>
        -----------------------------------------------------------------------------------------
        <h1 className='title'>Домашнее задание 1</h1>
        <Message title="Homework1" />
        <Message text="Развернуть новый проект с использованием create-react-app." />
        <Message text="Создать компонент Message, отображающий переданный ему props текст." />
        <Message text="Дополнительное задание Установить расширение React Devtools." /></div>
      <>
        ------------------------------------------------------------------------------------
        <h1 className='title'>Домашнее задание 2</h1>
        <CommentsList /></>
      ------------------------------------------------------------------------------
      <h1 className='title'>Домашнее задание 3</h1>
      <TemperatureConverter />
      <>

        <TodoForm saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </>
      ---------------------------------------------------------------------------
      <> <h1 className='title'>Домашнее задание 4</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter></>
      ---------------------------------------------------------------------------
      <h1 className='title'>Домашнее задание 5</h1>
      <header
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>

      </header>
      ----------------------------------------------------------------------------
      <Provider store={store}>
        <div>
          <h1 className='title'>Домашнее задание 6</h1>
          <div className="content">
            <div>
              <AddProduct />
            </div>
            <div>
              <ProductList />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;

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



function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <div>
      <h1 className='title'>Домашнее задание 1</h1>
        <Message title="Homework1" />
        <Message text="Развернуть новый проект с использованием create-react-app." />
        <Message text="Создать компонент Message, отображающий переданный ему props текст." />
        <Message text="Дополнительное задание Установить расширение React Devtools." /></div>
      <><h1 className='title'>Домашнее задание 2</h1>
        <CommentsList /></>
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
      <> <h1 className='title'>Домашнее задание 4</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter></>

    </div>
  );
}

export default App;

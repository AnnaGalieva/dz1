import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/dz3/TemperatureConverter';
import TodoForm from './components/dz3/TodoForm';
import useTodoState from './components/dz3/useTodoState';
import TodoList from './components/dz3/TodoList';


function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <div><Message title="Homework1" />
        <Message text="Развернуть новый проект с использованием create-react-app." />
        <Message text="Создать компонент Message, отображающий переданный ему props текст." />
        <Message text="Дополнительное задание Установить расширение React Devtools." /></div>
      <CommentsList />
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

    </div>
  );
}

export default App;

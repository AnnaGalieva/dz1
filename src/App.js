import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <div><Message title="Homework1" />
      <Message text="Развернуть новый проект с использованием create-react-app." />
      <Message text="Создать компонент Message, отображающий переданный ему props текст." />
      <Message text="Дополнительное задание Установить расширение React Devtools." /></div>
     <CommentsList /> 
    </div>
  );
}

export default App;

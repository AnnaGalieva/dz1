// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание Установить расширение React Devtools.

function Message({ title, text }) {
    return (
        <div className="message">
            <h2 className="heading">{title}</h2>
            <p className="texting">{text}</p>
        </div>
    );
}

export default Message;
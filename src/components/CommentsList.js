// Создать компонент CommentsList, который отображает список комментариев.Каждый комментарий должен иметь кнопку для его удаления.При нажатии на кнопку комментарий должен удаляться из списка.
// Можно использовать заготовку
// const [comments, setComments] = useState([
//     { id: 1, text: "Это первый комментарий" },
//     { id: 2, text: "Это второй комментарий" },
//     { id: 3, text: "Это третий комментарий" }
// ]);
import { useState } from "react";
function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const removeElement = (id) => {
        const newComments = comments.filter(
            (comment) => comment.id !== id
        );
        setComments(newComments);
    };

    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h1>{comment.text}</h1>
                    <button onClick={() => removeElement(comment.id)}>
                        Удалить комментарий
                    </button>
                    <br />
                    <br />
                </div>
            ))}
        </>
    );
}

export default CommentsList;
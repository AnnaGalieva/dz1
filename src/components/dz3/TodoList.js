// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.
// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;
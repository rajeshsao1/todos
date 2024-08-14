import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete'; // Ensure this import is correct

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
            />
            <ListItemText 
                primary={todo.text} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            />
        </ListItem>
    );
};

export default TodoItem;

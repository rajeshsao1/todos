import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
                variant="outlined" 
                label="Add a new task" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <Button variant="contained" type="submit">
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;

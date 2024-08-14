import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
        Swal.fire({
            icon: 'success',
            title: 'Task added!',
            text: 'The task has been successfully added.',
        });
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        Swal.fire({
            icon: 'info',
            title: 'Task updated!',
            text: 'The task has been marked as complete or incomplete.',
        });
    };

    const deleteTodo = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This task will be permanently deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedTodos = todos.filter(todo => todo.id !== id);
                setTodos(updatedTodos);
                Swal.fire(
                    'Deleted!',
                    'The task has been deleted.',
                    'success'
                );
            }
        });
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4" component="h1" gutterBottom align="center">
                To-Do List
            </Typography>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} currentFilter={filter} />
            <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        </Container>
    );
};

export default TodoApp;

import { useEffect, useState } from "react";
import ToDoListForm from "./ToDoListForm";
import List from '@mui/material/List';
import { Box, Typography } from "@mui/material";

import { v4 as uuid } from 'uuid'
import TodoItem from "./TodoItem";
const InitialData = () => {
    const data = JSON.parse(localStorage.getItem('todoList'))
    if (!data)
        return [];
    else return data;
}

export default function ToDoList() {

    const [items, setItems] = useState(InitialData);
    useEffect(() => { localStorage.setItem('todoList', JSON.stringify(items)) }, [items])

    const removeItem = (id) => {
        setItems(prevItem => {
            return prevItem.filter(t => t.id !== id)
        })
    }
    const toggleItem = (id) => {
        setItems(prevItem => {
            return prevItem.map(t => {
                if (t.id === id)
                    return { ...t, completed: !t.completed }
                else return t;
            })
        })
    }
    const addItem = (item) => {
        setItems(currVal => {
            return [...currVal, { id: uuid(), item: item, completed: false }]
        })
    }


    return (<Box sx={{
        display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', m: 3, border: "1px solid black"
    }}>
        <Typography variant="h2" component="h1">To-Do List</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {items.map((value) => {
                return <TodoItem value={value} key={value.id} toggleItem={() => toggleItem(value.id)} removeItem={() => {
                    removeItem(value.id)
                }} />
            })}
            <ToDoListForm addItem={addItem} />
        </List>
    </Box>);

    // return <>
    //     <h1>To-Do List</h1>
    //     <ToDoListForm addItem={addItem} />

    // </>
}
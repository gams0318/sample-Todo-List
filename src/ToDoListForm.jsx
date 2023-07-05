import { useState } from "react";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Create from '@mui/icons-material/Create'
import { IconButton } from "@mui/material";
export default function ToDoListForm({ addItem }) {

    const [item, setItem] = useState("");
    const handleChange = (e) => {
        setItem(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item)
        setItem("");
    }
    return <div><ListItem>
        <form action="" onSubmit={handleSubmit}>
            <TextField id="item" label="Enter Item" value={item} onChange={handleChange} variant="filled"
                InputProps={{
                    endAdornment: (
                        < InputAdornment position="end">
                            <IconButton
                                aria-label="create item" edge="end" type="submit">
                                <Create />
                            </IconButton>
                        </InputAdornment>)
                }} />

        </form>
    </ListItem>
    </div>
}
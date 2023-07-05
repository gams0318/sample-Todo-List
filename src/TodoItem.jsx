import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoItem({ value, removeItem, toggleItem }) {

    const labelId = `checkbox-list-label-${value.id}`;

    return (
        <ListItem

            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeItem}>
                    <DeleteOutlinedIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={value.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggleItem}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.item} />
            </ListItemButton>
        </ListItem>
    );


}
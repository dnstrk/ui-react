import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import UserCard from "../Cards/UserCard";
import EmptyCard from "../Cards/EmptyCard";

export default function UserList(props) {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "transparent",
            }}
        >   
            {props.users.length > 0 ?
                props.users.map((user) => (
                    <ListItem key={user.id}>
                        <UserCard person={user}></UserCard>
                    </ListItem>
                )):
                <ListItem sx={{justifyContent: 'center'}}><EmptyCard/></ListItem>
            }
            
        </List>
    );
}

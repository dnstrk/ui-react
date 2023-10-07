import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import UserCard from "../Cards/UserCard";

export default function UserList(props) {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "transparent",
            }}
        >
            {props.users.map((user) => (
                <ListItem key={user.id}>
                    <UserCard person={user}></UserCard>
                </ListItem>
            ))}
        </List>
    );
}

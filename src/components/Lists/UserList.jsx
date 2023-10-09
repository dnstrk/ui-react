import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import UserCard from "../Cards/UserCard";
import NoUsersAlert from "../Alert/NoUsersAlert";

export default function UserList(props) {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "transparent",
            }}
        >
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <a href={"/" + user.id} key={user.id}>
                        <ListItem>
                            <UserCard person={user}></UserCard>
                        </ListItem>
                    </a>
                ))
            ) : (
                <ListItem sx={{ justifyContent: "center" }}>
                    <NoUsersAlert />
                </ListItem>
            )}
        </List>
    );
}

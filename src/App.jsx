import React, { useEffect, useState } from "react";
import "./App.css";
import MainAppBar from "./components/AppBar/MainAppBar";
import { Alert, Container } from "@mui/material";
import axios from "axios";
import UserList from "./components/Lists/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const users = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsersList(users.data);
        } catch (e) {
            console.log(e.message)
        }
    }

    const filter = (list, query, filterSelector) => {
        let filteredList = [];
        if(filterSelector==='name') {
            filteredList = list.filter((user) => {
                return user.name.toLowerCase().includes(query.toLowerCase());
            });
        } else if(filterSelector==='nick'){
            filteredList = list.filter((user) => {
                return user.username.toLowerCase().includes(query.toLowerCase());
            });
        } else {
            filteredList = list.filter((user) => {
                return user.name.toLowerCase().includes(query.toLowerCase());
            });
        }
        

        return filteredList;
    };
    const filteredUsers = filter(usersList, inputValue, filterValue);

    return (
        <div className="col">
            <MainAppBar
                inpVal={inputValue}
                setVal={setInputValue}
                filterVal={filterValue}
                setFilter={setFilterValue}
            />
            <Container maxWidth="lg" sx={{ mt: "1rem" }}>
                <UserList users={filteredUsers} />
            </Container>
        </div>
    );
}
export default App;

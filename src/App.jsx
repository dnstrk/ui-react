import React, { useEffect, useState } from "react";
import "./App.css";
import MainAppBar from "./components/AppBar/MainAppBar";
import { Container } from "@mui/material";
import axios from "axios";
import UserList from "./components/Lists/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [inputValue, setInputValue] = useState("");

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
            console.log(e);
        }
    }

    return (
        <div className="col">
            <MainAppBar inpVal={inputValue} setVal={setInputValue} />
            <Container maxWidth="lg" sx={{ mt: "1rem" }}>
                <UserList inpVal={inputValue} users={usersList} />
            </Container>
        </div>
    );
}
export default App;

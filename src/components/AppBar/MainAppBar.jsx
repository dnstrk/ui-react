import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, TextField } from "@mui/material";
import cl from "./MainAppBar.module.css";

export default function MainAppBar(props) {
    // const [inputValue, setInputValue] = useState("");
    console.log(typeof props.inpVal);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: "#464646" }} position="static">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography variant="h6" component="span">
                        Users
                    </Typography>
                    {props.inpVal ? (
                        <Typography>{props.inpVal}</Typography>
                    ) : (
                        <Typography sx={{ opacity: 0.2 }}>
                            controlled
                        </Typography>
                    )}

                    <TextField
                        onChange={(e) => {
                            props.setVal(e.target.value);
                        }}
                        id="standard-basic"
                        label="search"
                        variant="standard"
                        autoFocus
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

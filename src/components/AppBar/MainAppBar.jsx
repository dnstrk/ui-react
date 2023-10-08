import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";

export default function MainAppBar(props) {
    // const [inputValue, setInputValue] = useState("");
    // console.log(typeof props.inpVal);

    const handleChange = (e) => {
        props.setFilter(e.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: "#464646" }} position="static">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography variant="h6" component="span">
                        Users
                    </Typography>
                    {/* {props.inpVal ? (
                        <Typography>{props.inpVal}</Typography>
                    ) : (
                        <Typography sx={{ opacity: 0.2 }}>
                            controlled
                        </Typography>
                    )} */}
                    <FormControl sx={{ width: "200px" }}>
                        <InputLabel id="demo-simple-select-label">
                            Filter selection
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.filterVal}
                            label="Filter selection"
                            onChange={handleChange}
                        >
                            <MenuItem value='name'>Name</MenuItem>
                            <MenuItem value='username'>Username</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        onChange={(e) => {
                            props.setVal(e.target.value);
                        }}
                        id="standard-basic"
                        label="search users"
                        variant="standard"
                        autoFocus
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

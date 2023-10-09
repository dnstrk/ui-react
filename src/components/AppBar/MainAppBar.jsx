import React from "react";
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
    Container,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function MainAppBar(props) {
    // const [inputValue, setInputValue] = useState("");
    // console.log(typeof props.inpVal);

    const handleChange = (e) => {
        props.setFilter(e.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: "#464646" }} position="static">
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="span"
                            color="#e6e3e3"
                            sx={{ flexGrow: 1 }}
                        >
                            Users
                        </Typography>
                        {/* {props.inpVal ? (
                        <Typography>{props.inpVal}</Typography>
                    ) : (
                        <Typography sx={{ opacity: 0.2 }}>
                            controlled
                        </Typography>
                    )} */}
                        <SearchIcon
                            sx={{ mt: "1rem", mr: "2px", color: "#9c9695" }}
                        />
                        <TextField
                            onChange={(e) => {
                                props.setVal(e.target.value);
                            }}
                            id="standard-basic"
                            label="Search users"
                            variant="standard"
                            autoFocus
                            sx={{
                                mr: "20px",
                                input: {
                                    transition: ".3s",
                                    borderRadius: "20px",
                                    p: "4px 10px 5px",
                                    ":focus": { bgcolor: "#9c9695" },
                                },
                                label: { color: "#e6e3e3", ml: "0.5rem" },
                                div: {
                                    "::before": {
                                        borderBottom: "none",
                                    },
                                    "::after": {
                                        borderBottom: "none",
                                    },
                                    ":hover": {
                                        ":before": {
                                            borderBottom: "none",
                                        },
                                        borderBottom: "none",
                                    },
                                },
                            }}
                        />
                        <FormControl
                            sx={{
                                width: "120px",
                                mt: "0.5rem",
                                label : {
                                    color: "#e6e3e3"
                                }
                            }}
                            size="small"
                        >
                            <InputLabel id="demo-simple-select-label">
                                Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.filterVal}
                                label="Filter selection"
                                onChange={handleChange}
                                sx={{ div: { color: "#e6e3e3" } }}
                            >
                                <MenuItem value="name">Name</MenuItem>
                                <MenuItem value="nick">Nick</MenuItem>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

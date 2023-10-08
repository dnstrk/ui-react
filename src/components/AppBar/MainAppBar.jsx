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
                            color="#BEBEBE"
                            sx={{flexGrow: 1}}
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

                        <TextField
                            onChange={(e) => {
                                props.setVal(e.target.value);
                            }}
                            id="standard-basic"
                            label="Search users"
                            variant="standard"
                            autoFocus
                            sx={{mr: '20px'}}
                        />
                        <FormControl
                            sx={{
                                width: "120px",
                                bgcolor: "#9c9695",
                                boxShadow: "0 0 10px #000",
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

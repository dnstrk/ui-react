import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";


export default function UserCard(props) {
    return (
        <Card sx={{ width: "100%", display: "flex", bgcolor: "#454545" }}>
            <Box sx={{ flexGrow: 1 }}>
                <CardContent>
                    <Typography sx={{ color: "#CDCDCD", mb: '10px' }}>
                        {props.person.id}. {props.person.name}
                    </Typography>
                    <Link sx={{ color: "#CDCDCD" }} href="mailto:" underline="none">
                        {props.person.email.toLowerCase()}
                    </Link>
                </CardContent>
            </Box>
            <Box>
                <CardContent>
                    <Typography sx={{ color: "#F66F52" }}>
                        {props.person.username} 
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";

export default function UserCard(props) {
    const mailTo = () => {
        return 'mailto:'+props.person.email
    }

    return (
        <Card
            sx={{
                ":hover": { bgcolor: "#777777" },
                width: "100%",
                display: "flex",
                bgcolor: "#454545",
                boxShadow: "0 0 10px #000",
                transition: 0.3,
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <CardContent>
                    <Typography sx={{ color: "#CDCDCD", mb: "10px" }}>
                        {props.person.id}. {props.person.name}
                    </Typography>
                    <Link
                        sx={{ color: "#CDCDCD" }}
                        href={mailTo()}
                        underline="none"
                    >
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

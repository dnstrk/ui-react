import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";

export default function EmptyCard() {
    return (
        <Card sx={{ width: "300px", display: "flex", bgcolor: "#454545" }}>
            <Box sx={{ flexGrow: 1 }}>
                <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                        sx={{ color: "#D72424", mb: "10px", fontSize: "20px" }}
                    >
                        No users found
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

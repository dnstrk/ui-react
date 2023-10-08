import React from "react";
import { Card, Box, CardContent, Typography, Alert } from "@mui/material";

export default function EmptyCard() {
    return (
        <Alert severity="error">No users found</Alert>
        // <Card sx={{ width: "300px", display: "flex", bgcolor: "#454545" }}>
        //     <Box sx={{ flexGrow: 1 }}>
        //         <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        //             <Typography
        //                 sx={{ color: "#D72424", mb: "10px", fontSize: "20px" }}
        //             >
        //                 No users found
        //             </Typography>
        //         </CardContent>
        //     </Box>
        // </Card>
    );
}

import React from "react";
import { Alert } from "@mui/material";

export default function NoUsersAlert() {
    return (
        <Alert sx={{ width: "100%" }} severity="error">
            No users found
        </Alert>
    );
}

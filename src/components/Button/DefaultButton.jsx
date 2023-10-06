import React from "react";
import Button from "@mui/material/Button";

// 

export default function DefaultButton({check, children}) {

    return <Button disabled={check}>{children}</Button>;
}

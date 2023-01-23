import React from "react";
import {TextField} from "@mui/material";

export function CustomTextField(props) {
    return (
        <div>
            <TextField
                margin="dense"
                variant="outlined"
                {...props}
            />
        </div>
    );
}
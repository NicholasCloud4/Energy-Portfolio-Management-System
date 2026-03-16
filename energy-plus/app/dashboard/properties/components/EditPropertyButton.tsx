"use client";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

type EditPropertyButtonPorps = {
    onClick: () => void;
};

export default function EditPropertyButton({
   onClick,
}: EditPropertyButtonPorps) {
    return (
        <IconButton aria-label="edit" onClick={onClick} title="Edit property">
            <EditIcon/>
        </IconButton>
    );
}


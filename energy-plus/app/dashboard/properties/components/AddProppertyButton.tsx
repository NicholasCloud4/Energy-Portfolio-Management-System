"use client";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

type AddPropertyButtonProps = {
    onClick: () => void;
};

export default function AddPropertyButton({
                                              onClick,
                                          }: AddPropertyButtonProps) {
    return (
        <Button variant="contained" startIcon={<AddIcon />} onClick={onClick}>
            Add Property
        </Button>
    );
}
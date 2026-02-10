"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar bg-black h-18 text-white shadow-lg px-4">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl text-white">
            logo
            </Link>
        </div>
        <div className="hidden md:flex gap-2">
            <Link href="/" className="btn btn-ghost bg-black border-none font-normal text-white">
            Home
            </Link>
            <Link href="/#service" className="btn btn-ghost bg-black border-none font-normal text-white">
            Services
            </Link>
            <Link href="/#location" className="btn btn-ghost bg-black border-none font-normal text-white">
            About
            </Link>
        </div>
        <div className="md:hidden">
            <div className="md:hidden flex justify-end">
                <IconButton onClick={handleOpen} aria-label="open menu">
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>
            </div>
            <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disablePortal 
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
                sx: {
                backgroundColor: "#09090b",
                color: "white",
                minWidth: 160,
                right:0,
                },
            }}
            >
            <MenuItem component={Link} href="/" onClick={handleClose}>
                Home
            </MenuItem>
            <MenuItem component={Link} href="/#service" onClick={handleClose}>
                Services
            </MenuItem>
            <MenuItem component={Link} href="/#location" onClick={handleClose}>
                Locations
            </MenuItem>
            </Menu>
        </div>
        </div>
    );
}

export default Navbar;

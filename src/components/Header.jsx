import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router";
import "../css/Header.css";
import logo from "../image/nba-logo.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ backgroundColor: "#0253a4" }}>
      <Toolbar>
        <Box
          onClick={() => navigate("/")}
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: { xs: 40, sm: 50, md: 64 },
            mr: 2,
            cursor: "pointer",
          }}
        />

        <Stack direction="row" sx={{ marginLeft: "10px" }}>
          <Link className="link" to="/">
            Roads
          </Link>
          <Link className="link" to="/">
            AI Assist
          </Link>
        </Stack>
        <Stack direction="row " sx={{ marginLeft: "auto" }}>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router";
import "../css/Header.css";
import logo from "../image/Logo.png";
import { Box, Button, IconButton } from "@mui/material";
import { AccountCircle, MoreVert as MoreIcon } from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Kullanıcı giriş yaptı mı?

  const menuId = "primary-search-account-menu";
  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box
          onClick={() => navigate("/")}
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: { xs: 40, sm: 45, md: 54 },
            mr: 3,
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
        {isAuthenticated ? (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => console.log("Profil açıldı")}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Stack>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

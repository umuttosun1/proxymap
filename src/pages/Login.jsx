import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Login
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 3 }}>
        Welcome back! Let's take you to your account.
      </Typography>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        sx={{ mb: 1 }}
      >
        Continue with GitHub
      </Button>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mb: 1 }}
      >
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<LinkedInIcon />}
        sx={{ mb: 2 }}
      >
        Continue with LinkedIn
      </Button>

      <Divider sx={{ my: 2 }}>OR</Divider>

      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 1 }}
      />

      <Typography variant="body2" sx={{ textAlign: "left", mb: 2 }}>
        <a href="#" style={{ textDecoration: "none" }}>
          Reset your password?
        </a>
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "black", color: "white" }}
      >
        Continue
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          Sign up
        </a>
      </Typography>

      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ mt: 2, display: "block" }}
      >
        By continuing to use our services, you acknowledge that you have both
        read and agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </Typography>
    </Container>
  );
};

export default Login;

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

const SignUp = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Sign Up
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 3 }}>
        Create an account to track your progress, showcase your skill-set and be
        a part of the community.
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
        label="Full Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
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
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "black", color: "white" }}
      >
        Continue to Verify Email
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          Login
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

export default SignUp;

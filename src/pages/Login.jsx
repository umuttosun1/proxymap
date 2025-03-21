import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Giriş Yap
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{
          mb: 1,
          mt: 8,
          color: "black",
          borderColor: "black",
          fontWeight: "bold",
        }}
      >
        Google ile giriş yap
      </Button>

      <Divider sx={{ my: 2 }}>VEYA</Divider>

      <TextField
        label="E-Posta Adresi"
        variant="outlined"
        fullWidth
        color="black"
        sx={{ mb: 1 }}
      />
      <TextField
        label="Şifre"
        type="password"
        variant="outlined"
        fullWidth
        color="black"
        sx={{ mb: 1 }}
      />

      <Typography variant="body2" sx={{ textAlign: "left", mb: 2 }}>
        <a href="#" style={{ textDecoration: "none" }}>
          Şifreni mi Unuttun?
        </a>
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "black", color: "white" }}
      >
        Giriş Yap
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Hesabın yok mu?{" "}
        <a href="/signup" style={{ textDecoration: "none" }}>
          Hesap Oluştur
        </a>
      </Typography>
    </Container>
  );
};

export default Login;

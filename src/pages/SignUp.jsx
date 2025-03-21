import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Hesap Oluştur
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
        Google ile Devam Et
      </Button>

      <Divider sx={{ my: 2 }}>VEYA</Divider>

      <TextField
        label="İsim Soyisim"
        variant="outlined"
        fullWidth
        color="black"
        sx={{ mb: 2 }}
      />
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
        sx={{ mb: 3 }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "black", color: "white" }}
      >
        E-Posta Doğrula
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Hesabın zaten var mı?{" "}
        <a href="/login" style={{ textDecoration: "none" }}>
          Giriş Yap
        </a>
      </Typography>
    </Container>
  );
};

export default SignUp;

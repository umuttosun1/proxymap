import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice"; // Yeni thunk
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser(formData));

    if (registerUser.fulfilled.match(resultAction)) {
      navigate("/login"); // Başarılı kayıt → login sayfasına yönlendir
    }
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">
        Hesap Oluştur
      </Typography>

      <Divider sx={{ my: 3 }}>VEYA</Divider>

      <form onSubmit={handleSubmit}>
        <TextField
          label="İsim"
          variant="outlined"
          fullWidth
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Soyisim"
          variant="outlined"
          fullWidth
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="E-Posta Adresi"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Şifre"
          type="password"
          variant="outlined"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
        />

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "black", color: "white", mb: 2 }}
          disabled={loading}
        >
          {loading ? "Kaydediliyor..." : "Hesap Oluştur"}
        </Button>
      </form>

      <Typography variant="body2">
        Zaten hesabın var mı?{" "}
        <a href="/login" style={{ textDecoration: "none" }}>
          Giriş Yap
        </a>
      </Typography>
    </Container>
  );
};

export default SignUp;

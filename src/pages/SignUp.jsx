import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/authSlice"; // Redux Slice'ı içe aktar
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(createUser(formData));

    if (createUser.fulfilled.match(resultAction)) {
      navigate("/dashboard"); // Kullanıcı başarıyla kaydolursa yönlendir
    }
  };

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

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="İsim Soyisim"
          variant="outlined"
          fullWidth
          name="fullname"
          value={formData.fullname}
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
          sx={{ mb: 1 }}
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

        {/* Hata mesajı gösterme */}
        {error && <Typography color="error">{error}</Typography>}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "black", color: "white" }}
          disabled={loading}
        >
          {loading ? "Kaydediliyor..." : "E-Posta Doğrula"}
        </Button>
      </form>

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

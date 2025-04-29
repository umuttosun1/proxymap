import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";

const questions = [
  {
    question: "Bir projede çalışırken hangi duruma daha çok önem verirsiniz?",
    options: [
      { label: "Yaratıcı çözümler üretmek", value: "creative" },
      { label: "Teknik detayları doğru uygulamak", value: "technical" },
    ],
  },
  {
    question: "Yeni bir teknoloji öğrenirken nasıl bir yöntem izlersiniz?",
    options: [
      { label: "Deneyerek öğrenirim", value: "experimental" },
      { label: "Önce detaylı dokümantasyon okurum", value: "structured" },
    ],
  },
  {
    question: "Ekip çalışmasında rolünüz nasıl olur?",
    options: [
      { label: "Liderlik etmeyi severim", value: "leader" },
      { label: "Destekleyici ve uygulayıcı olurum", value: "supporter" },
    ],
  },
];

const PersonalityExams = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateResult = () => {
    const counts = {
      creative: 0,
      technical: 0,
      experimental: 0,
      structured: 0,
      leader: 0,
      supporter: 0,
    };
    Object.values(answers).forEach((value) => {
      counts[value]++;
    });

    if (counts.creative >= 2 || counts.experimental >= 2) {
      return "Yaratıcı yazılım geliştirme alanlarında (Frontend, UI/UX, Mobil) başarılı olabilirsiniz.";
    } else if (counts.technical >= 2 || counts.structured >= 2) {
      return "Teknik ve detay odaklı alanlarda (Backend, Sistem Mühendisliği, Güvenlik) başarılı olabilirsiniz.";
    } else if (counts.leader >= 2) {
      return "Proje yönetimi, takım liderliği ve ürün yönetimi gibi rollere uygunsunuz.";
    } else {
      return "Destek ve uygulama odaklı alanlarda (Test Mühendisliği, Destek Geliştirici) başarılı olabilirsiniz.";
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" fontWeight="bold" mb={5} textAlign="center">
        Kişilik Analizi Testi
      </Typography>

      {!showResult ? (
        <form>
          <Stack spacing={5}>
            {questions.map((q, index) => (
              <Box key={index}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={{ mb: 2 }}>
                    {q.question}
                  </FormLabel>
                  <RadioGroup
                    value={answers[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                  >
                    {q.options.map((option, idx) => (
                      <FormControlLabel
                        key={idx}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
            ))}
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 5, backgroundColor: "black", color: "white" }}
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
          >
            Testi Tamamla
          </Button>
        </form>
      ) : (
        <Box textAlign="center" mt={5}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="success.main"
            mb={3}
          >
            Sonuç
          </Typography>
          <Typography variant="h6">{calculateResult()}</Typography>

          <Button
            variant="outlined"
            sx={{ mt: 5 }}
            onClick={() => {
              setShowResult(false);
              setAnswers({});
            }}
          >
            Yeniden Başla
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default PersonalityExams;

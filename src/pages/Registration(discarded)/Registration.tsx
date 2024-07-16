import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Registration.module.scss";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import authService from "../../services/api/Authentication";
import Text from "../../components/inputs/Text/Text";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Registration() {
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const [dataErrorMessage, setDataErrorMessage] = useState("");

  const dataIsValid = (email: string, password: string, confirmPassword: string) => {
    if (!/^\w+@\w+\.\w+$/.test(email)) {
      setDataErrorMessage("Geçersiz e-posta");
      return false;
    }
    if (password.length < 3) {
      setDataErrorMessage("Şifre en az 3 karakterden oluşmalıdır");
      return false;
    }
    if (password !== confirmPassword) {
      setDataErrorMessage("Şifre eşleşmiyor");
      return false;
    }
    setDataErrorMessage("");
    return true;
  };

  const handleRegistr = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")!.toString();
    const password = data.get("password")!.toString();
    const confirmPassword = data.get("confirmPassword")!.toString();
    if (!dataIsValid(email, password, confirmPassword)) return;
    // authStore.setLoading(true);
    const result = await authService
      .signUp({
        email: email,
        password: password,
      })
      .catch((err) => {
        console.error(err.response.data.message);
        // authStore.setLoading(false);
        setDataErrorMessage(err.response.data.message);
      });
    if (!result) return;
    navigate("/");
    authStore.setSignedIn(true);
    // authStore.setLoading(false);
  };

  const handleLogin = async () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={styles["headerBox"]}>
          <Avatar className={styles["logo"]}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kaydol
          </Typography>
          <Box component="form" onSubmit={handleRegistr} noValidate className={styles["form"]}>
            <Text type="email" id="email" label="E-posta Adresi" name="email" autoFocus />
            <Text name="password" label="Şifre" type="password" id="password" />
            <Text name="confirmPassword" label="Şifreyi Tekrarla" type="password" id="confirmPassword" />
            <Button type="submit" fullWidth variant="contained" className={styles["button"]}>
              Hesap Oluştur
            </Button>
            <Button fullWidth variant="contained" onClick={handleLogin} className={styles["button"]}>
              Giriş yap {"\u00a0"} {">>"}
            </Button>
          </Box>
          {/* {authStore.loading ? <CircularProgress className={styles["progress"]} color="info" /> : null} */}
          <p className={styles["error-message"]}>{dataErrorMessage === "" ? "\u00a0" : dataErrorMessage}</p>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

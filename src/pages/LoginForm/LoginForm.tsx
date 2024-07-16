import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./LoginForm.module.scss";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import authService from "../../services/api/Authentication";
import { CircularProgress } from "@mui/material";
import Text from "../../components/inputs/Text/Text";
import backImg from "assets/background_escalators.webp";
import MainButton from "../../components/buttons/MainButton/MainButton";
import { useLoginFormStore } from "./loginFormStore";

export default function LoginForm() {
  const navigate = useNavigate();

  const { loading, dataErrorMessage, setLoading, setDataErrorMessage } = useLoginFormStore();
  const { setSignedIn } = useAuthStore();

  const [formData, setFormData] = useState<{ email: string; password: string }>({ email: "", password: "" });

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dataIsValid = (email: string, password: string) => {
    if (!/^\w+@\w+\.\w+$/.test(email)) {
      setDataErrorMessage("Geçersiz e-posta");
      return false;
    }
    if (password.length < 3) {
      setDataErrorMessage("Şifre en az 3 karakterden oluşmalıdır");
      return false;
    }
    setDataErrorMessage("");
    return true;
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dataIsValid(formData.email, formData.password)) return;
    setLoading(true);
    const result = await authService.signIn(formData).catch((err) => {
      console.error(err.response.data.message);
      setLoading(false);
      setDataErrorMessage("Hatalı mail adresi veya şifre");
    });
    if (!result) return;
    navigate("/");
    setSignedIn(true);
    setLoading(false);
  };

  return (
    <div className={styles["container"]} style={{ backgroundImage: `url(${backImg})`, height: "100vh", backgroundSize: "cover", marginTop: "-38px" }}>
      <Box className={styles["headerBox"]}>
        <p className={styles["title"]}>Kutlay Mühendislik</p>
        <p className={styles["subtitle"]}>Oturum aç</p>
        <Box component="form" onSubmit={handleLogin} noValidate className={styles["form"]}>
          <Text
            inputStyle={{ width: "400px", height: "41px" }}
            required
            type="email"
            label="E-posta Adresi"
            name="email"
            autoComplete="email"
            autoFocus
            clearOutsideLabel
            onChange={handleInputChange}
          />
          <Text
            required
            name="password"
            label="Şifre"
            type="password"
            autoComplete="current-password"
            clearOutsideLabel
            style={{ marginBottom: "40px" }}
            onChange={handleInputChange}
          />
          <MainButton type="submit" variant="contained" color="danger" height="50px">
            OTURUM AÇ
          </MainButton>
        </Box>
        {loading ? <CircularProgress className={styles.progress} color="info" /> : null}
        <p className={styles["error-message"]}>{dataErrorMessage === "" ? "\u00a0" : dataErrorMessage}</p>
      </Box>
    </div>
  );
}

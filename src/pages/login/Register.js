import React, { useState, useContext } from "react";
import { Alert, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from 'axios';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Context } from '../../context/Context'
import { THANK_ROUTE } from "../../utils/Consts";
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../login/Register.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PassSecure from "../../modal/passwordSecure/PassSecure";



const Register = () => {
  const [login, setLogin] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [greet, setGreet] = useState(false)

  const { dispatch, user } = useContext(Context);


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };




  


  const handleForm = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://raihanapp.herokuapp.com/api/register/", {
        email,
        password,
        login,
        surname,
        age,
        gender,
        number
      });
      setOpen(true);
    setTimeout(setOpen, 3000)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      window.location.assign(THANK_ROUTE);
      setGreet(true)
      setLogin("");
      setEmail("");
      setPassword("");
      setAge("");
      setGender("");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error);
    }
  };

  return (
    <div className="register">
      {greet ? <Alert>Привет {user.login}</Alert> : ""}
      <h1
        style={{
          display: "block",
          fontFamily: "AktivGrotesk-Regular",
          fontSize: "1.525rem",
          letterSpacing: ".0125rem",
          lineHeight: "1.2",
          marginBottom: "32px",
          paddingTop: "16px",
        }}
      >
        Моя учетная запись / Регистрация
      </h1>
      <p>
        Создайте учетную запись и откройте для себя все преимущества,
        зарезервированные для наших зарегистрированных пользователей.
      </p>
      <div
        className="allPlus"
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <div style={{ width: "20%" }}>
          <PersonOutlineIcon />
          <p>Управление и обновление ваших личных данных</p>
        </div>
        <div style={{ width: "20%" }}>
          <FavoriteBorderIcon />
          <p>Сохраняйте понравившиеся товары в списке желаний</p>
        </div>
        <div style={{ width: "20%" }}>
          <AirportShuttleOutlinedIcon />
          <p>
            Надежно сохраните платежную информацию и адреса, чтобы ускорить
            покупки
          </p>
        </div>
        <div style={{ width: "20%" }}>
          <DoneOutlinedIcon />
          <p>
            Проверяйте сделанные заказы и отслеживайте поставки и возвраты в
            любое время
          </p>
        </div>
      </div>
      <p style={{ alignSelf: "end" }}>* Обязательные поля</p>
      <form className="form-register" onSubmit={handleForm}>
        <div>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onChange={(e) => setGender(e.target.value)}
                value="Мужчина"
                control={<Radio />}
                label="Мужчина"
              />
              <FormControlLabel
                onChange={(e) => setGender(e.target.value)}
                value="Женщина"
                control={<Radio />}
                label="Женщина"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          <TextField
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            id="outlined-basic"
            label="Введите ваше имя"
            variant="outlined"
            className="inputText"
            required
            style={{
              margin: "15px 25px",
            }}
          />
          <TextField
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            id="outlined-basic"
            label="Введите вашу фамилию"
            variant="outlined"
            className="inputText"
            required
            style={{
              margin: "15px 25px",
            }}
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setAge(e.target.value)}
            id="date"
            label="Дата рождение"
            type="date"
            className="inputText"
            defaultValue="0000-00-00"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            style={{
              width: "35%",
              margin: "15px 25px",
            }}
          />
          <TextField
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            id="outlined-basic"
            label="Введите номер тел"
            variant="outlined"
            className="inputText"
            type="tel"
            required
            style={{
              margin: "15px 25px",
            }}
          />
        </div>

        <div>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="inputText"
            type="email"
            id="outlined-basic"
            label="Введите email"
            variant="outlined"
            required
            style={{
              margin: "15px 25px",
            }}
          />
          <TextField
            id="outlined-basic"
            className="inputText"
            label="Введите пароль"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              margin: "15px 25px",
            }}
          />
        </div>

        <PassSecure />
        <div className="reg-secure">
          <h5
            style={{
              width: "80%",
              fontSize: "15px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Этот сайт защищен reCAPTCHA, и к нему применяются{" "}
            <a href="https://policies.google.com/privacy">
              Политика конфиденциальности{" "}
            </a>{" "}
            и <a href="https://policies.google.com/terms">Условия</a>{" "}
            использования Google .
          </h5>
        </div>
        <div>
          <Button style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px"
          }} type="submit" variant="outlined" className="registrBtn">
            Зарегистрироваться
          </Button>
        </div>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </form>
    </div>
  );
};

export default Register;

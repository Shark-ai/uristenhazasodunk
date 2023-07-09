import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../provider/User.context";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

import "../assets/style/Login.css";

const Login = (props) => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const fetchDatas = useCallback(async () => {
    setLoading(true);
    setDatas([]);
    setError(null);
    try {
      const response = await fetch(
        "https://vikiessanyi-20240704-default-rtdb.europe-west1.firebasedatabase.app/datas.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const transformData = [];

      for (const key in data) {
        transformData.push({
          id: key,
          name: data[key].name,
          password: data[key].password,
          szallas: data[key].szallas,
          etelintolerancia: data[key].etelintolerancia,
          hogyanerkezel: data[key].hogyanerkezel,
          hogyantavozol: data[key].hogyantavozol,
        });
      }
      setDatas(transformData);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);

  /* console.log(datas); */

  const errors = {
    uname: "Hibás felhasználó név",
    pass: "Hibás jelszó",
  };
  const [errorMessages, setErrorMessages] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    let userrr = datas.filter(
      (user) => user.name === uname.value && user.password === pass.value
    );
    setCurrentUser(userrr);
    /* console.log(userrr); */
    if (userrr.length === 1 && userrr[0].name === "Borsó meg a héja") {
      props.onLogin();
      navigate("/admin");
      return;
    }

    if (userrr.length === 1) {
      props.onLogin();
      navigate("/main");
      return;
    }

    let match = datas
      .map((datas) => datas.name)
      .filter((datas) => datas === uname.value);

    let matchPass =
      datas
        .map((datas) => datas.name)
        .filter((datas) => datas === uname.value) &&
      datas
        .map((datas) => datas.password)
        .filter((datas) => datas === pass.value);

    if (matchPass.length === 0) {
      setErrorMessages({ name: "pass", message: errors.pass });
    }

    if (match.length === 0) {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">
        {errorMessages.message}{" "}
        <FontAwesomeIcon icon={faHeartCrack} fade size="l" />
      </div>
    );

  return (
    <div style={{ height: "100%" }}>
      <header className="login-header"></header>

      <div className="login-container">
        <h1>Belépés</h1>
        <div className="login-inputs">
          <form onSubmit={submitHandler} className="login-form">
            <div>
              <FormControl
                className="formControl-container"
                sx={{ m: 1, width: "25ch" }}
                variant="standard"
              >
                <TextField
                  id="standard-basic"
                  name="uname"
                  label="Azonosító"
                  variant="standard"
                />
              </FormControl>
              {renderErrorMessage("uname")}
            </div>
            <div>
              <FormControl
                className="formControl-container"
                sx={{ m: 1, width: "25ch" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Jelszó
                </InputLabel>
                <Input
                  name="pass"
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {renderErrorMessage("pass")}
            </div>
            <div className="login-button">
              <FormControl
                className="formControl-container"
                sx={{ m: 1, width: "25ch" }}
                variant="standard"
              >
                <Button
                  variant="contained"
                  style={{
                    background:
                      "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
                    borderRadius: "0.125rem",
                    color: "#c2a44f",
                    cursor: "pointer",
                    disabled: "disabled",
                  }}
                  type="submit"
                  endIcon={<SendIcon />}
                >
                  Belépés
                </Button>
              </FormControl>
            </div>
          </form>
        </div>
        <div className="login-forget">
          <p>Elfelejtetted a belépési azonosítódat? (Nézd meg a meghívódat)</p>
        </div>
      </div>
      <footer className="login-footer"></footer>
    </div>
  );
};

export default Login;

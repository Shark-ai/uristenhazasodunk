import React, { useCallback, useState, useEffect, useContext } from "react";
import withLayout from "../layout/WithLayout";
import { useNavigate, NavLink } from "react-router-dom";

import "../assets/style/Input.css";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

import { UserContext } from "../provider/User.context";

const Input = () => {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser[0].name === "Máté" || currentUser[0].name === "Gyuri") {
      navigate("/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [szallas, setSzallas] = useState("");
  const [etelintolerancia, setEtelintolerancia] = useState("");
  const [hogyanerkezel, setHogyanerkezel] = useState("");
  const [hogyantavozol, setHogyantavozol] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(
        "https://vikiessanyi-20240704-default-rtdb.europe-west1.firebasedatabase.app/datas/" +
          currentUser[0].id +
          ".json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      /* console.log(response); */
      const data = await response.json();
      /* console.log(data); */
      setId(data.id);
      setName(data.name);
      setSzallas(data.szallas);
      setHogyanerkezel(data.hogyanerkezel);
      setHogyantavozol(data.hogyantavozol);
      setEtelintolerancia(data.etelintolerancia);
      setPassword(data.password);
    } catch (e) {
      console.log(e.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser[0].id]);

  /* console.log(datas); */

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    setId(id);
    setName(name);
    setSzallas(szallas);
    setHogyanerkezel(hogyanerkezel);
    setHogyantavozol(hogyantavozol);
    setEtelintolerancia(etelintolerancia);
    setPassword(password);
  }, [
    id,
    name,
    szallas,
    etelintolerancia,
    hogyantavozol,
    hogyanerkezel,
    password,
  ]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const szallasChangeHandler = (event) => {
    setSzallas(event.target.value);
  };
  const etelintoleranciaChangeHandler = (event) => {
    setEtelintolerancia(event.target.value);
  };

  const hogyanerkezelChangeHandler = (event) => {
    setHogyanerkezel(event.target.value);
  };

  const hogyantavozolChangeHandler = (event) => {
    setHogyantavozol(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const user = {
      id: id,
      name: name,
      szallas: szallas,
      etelintolerancia: etelintolerancia,
      hogyanerkezel: hogyanerkezel,
      hogyantavozol: hogyantavozol,
      password: password,
    };

    updateUser(user, user.id);
    setId("");
    setName("");
    setSzallas("");
    setEtelintolerancia("");
    setHogyanerkezel("");
    setHogyantavozol("");
    setPassword("");
    /* console.log(user.id); */
  }

  const updateUser = async (user, id) => {
    const response = await fetch(
      "https://vikiessanyi-20240704-default-rtdb.europe-west1.firebasedatabase.app/datas/" +
        currentUser[0].id +
        ".json",
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    await response.json();
    /* console.log(data); */
    const title = document.title;
    document.title = "Feltöltve...";
    setTimeout(() => {
      document.title = title;
    }, 3000);
    navigate("/main");
  };

  return (
    <div className="input-container">
      <h1>Adatlap</h1>
      <form className="form-container">
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <TextField
            value={name}
            onChange={nameChangeHandler}
            id="standard-basic"
            label="Név"
            variant="standard"
            disabled
          />
        </FormControl>
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <TextField
            value={szallas}
            placeholder="Igen/Nem"
            onChange={szallasChangeHandler}
            id="standard-basic"
            label="Szeretnél-e szállást?"
            variant="standard"
          />
        </FormControl>
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <TextField
            value={hogyanerkezel}
            placeholder="Meg tudom oldani/Nem tudom megoldani"
            onChange={hogyanerkezelChangeHandler}
            id="standard-basic"
            label="Hogyan érkezel"
            variant="standard"
          />
        </FormControl>
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <TextField
            value={hogyantavozol}
            placeholder="Meg tudom oldani/Nem tudom megoldani"
            onChange={hogyantavozolChangeHandler}
            id="standard-basic"
            label="Hogyan távozol"
            variant="standard"
          />
        </FormControl>
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <TextField
            value={etelintolerancia}
            placeholder="Név1: ..., Név2: ..."
            onChange={etelintoleranciaChangeHandler}
            id="standard-basic"
            label="Van-e ételintoleranciád?"
            variant="standard"
          />
        </FormControl>
        <FormControl
          className="formControl-section"
          sx={{ m: 1, width: "25ch" }}
          variant="standard"
        >
          <Button
            variant="contained"
            style={{
              background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
              borderRadius: "0.125rem",
              color: "#c2a44f",
              cursor: "pointer",
              disabled: "disabled",
            }}
            type="submit"
            onClick={submitHandler}
            endIcon={<SendIcon />}
          >
            Elküld
          </Button>
        </FormControl>
        <NavLink to="/main">
          <FormControl
            className="formControl-section"
            sx={{ m: 1, width: "25ch" }}
            variant="standard"
          >
            <Button
              variant="contained"
              style={{
                background: "linear-gradient(90deg, #143364 0%, #4b648c 100%)",
                borderRadius: "0.125rem",
                color: "#c2a44f",
                cursor: "pointer",
                disabled: "disabled",
              }}
              endIcon={<SendIcon />}
            >
              Vissza
            </Button>
          </FormControl>
        </NavLink>
      </form>
    </div>
  );
};

export default withLayout(Input, {
  onLogout: () => {
    alert("Logout");
  },
  isAuthenticated: true,
});

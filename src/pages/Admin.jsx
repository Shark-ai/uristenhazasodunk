import React, { useCallback, useState, useEffect, useContext } from "react";

import { UserContext } from "../provider/User.context";

import { useNavigate, NavLink } from "react-router-dom";

import "../assets/style/Admin.css";

const Admin = () => {
  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser[0].name !== "Borsó meg a héja") {
      navigate("/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          etelintolerancia: data[key].etelintolerancia,
          hogyanerkezel: data[key].hogyanerkezel,
          hogyantavozol: data[key].hogyantavozol,
          szallas: data[key].szallas,
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

  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table /* border={1} */>
          <thead
            style={{
              backgroundColor: "rgb(20, 51, 100)",
              color: "#c2a44f",
              borderStyle: "none",
            }}
          >
            <tr>
              <th>Név</th>
              <th>Szállás</th>
              <th>Érkezés</th>
              <th>Távozás</th>
              <th>Ételintolerancia</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={data.id}>
                <td
                  style={{
                    backgroundColor: "rgb(20, 51, 100)",
                    color: "#c2a44f",
                    borderStyle: "none",
                  }}
                >
                  {data.name}
                </td>
                <td>{data.szallas}</td>
                <td>{data.hogyanerkezel}</td>
                <td>{data.hogyantavozol}</td>
                <td>{data.etelintolerancia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink to="/main">Főoldal</NavLink>
      </div>
    </>
  );
};

export default Admin;

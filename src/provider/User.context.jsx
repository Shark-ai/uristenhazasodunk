import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (x) => x,
});

export const UserProviderr = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    if (!!localStorage.getItem("myKey")) {
      return JSON.parse(localStorage.getItem("myKey"));
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem("myKey", JSON.stringify(currentUser));
  }, [currentUser]);

  const map = new Map();
  map.set("IldiésSanyi", "Anya és Apa");
  map.set("ZoliesNiki", "Zoli és Niki");
  map.set("TomiesDanci", "Tomi és Danci");
  map.set("LiliesZsolti", "Lili és Zsolti");
  map.set("Krisztian", "Sici");
  map.set("Dani", "Dana");
  map.set("TimiesZoli", "Keresztanyu és Keresztapu");
  map.set("ViviesGergo", "Hugi és Gergő");
  map.set("Jankamama", "Mama");
  map.set("Feri", "Apu");
  map.set("JuditesAttila", "Anyu és Attila");
  map.set("OttiesPampi", "Otti és Pampi");
  map.set("Evi", "Évi");
  map.set("MarcsiesPisti", "Kerianyu és Keriapu");
  map.set("Mate", "Máté");
  map.set("AndiesPisti", "Andi és Pisti");
  map.set("Patrik", "Patrik");
  map.set("Peti", "Peti és párja");
  map.set("ReniesAdam", "Reni és Ádám");
  map.set("Vercsi", "Vercsi");
  map.set("BerniesMate", "Berni és Máté");
  map.set("KatiesPisti", "Kati és Pisti");
  map.set("Adam", "Ádám");
  map.set("David", "Dávid");
  map.set("Koko", "Koko");
  map.set("Wittmann", "Ricsi");
  map.set("DaniesGigi", "Dani és Gigi");
  map.set("BarbiesKornel", "Barbi és Kornél");
  map.set("vendeg", "Vendég");
  map.set("fotós", "Máté");
  map.set("videós", "Márk");
  map.set("lemezlovas", "István és kollégája");
  map.set("ceremóniamester", "Gyuri");
  map.set("ProoktatasA", "András");
  map.set("ProoktatasM", "Marcell");
  map.set("ProoktatasB", "Béla");
  map.set("admin", "Borsó meg a héja");

  const value = {
    currentUser,
    setCurrentUser: (arr) => {
      if (arr.length) {
        arr[0].name = map.get(arr[0].name) || arr[0].name;
        setCurrentUser(arr);
      }
    },
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

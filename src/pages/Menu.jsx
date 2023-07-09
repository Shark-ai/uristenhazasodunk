import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/style/Menu.css";
import Slide from "react-reveal/Slide";

import withLayout from "../layout/WithLayout";
import ScrollToTop from "../components/ScrollToTop";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Menu = () => {
  return (
    <>
      <ScrollToTop />
      <Slide right cascade>
        <div className="welcome-container">
          <h1 className="h1-menu-title" style={{ marginBottom: "0" }}>
            Vendégváró ételek-italok
          </h1>
          <h1 className="h1-menu-title" style={{ marginTop: "0" }}>
            (16:00-tól)
          </h1>
          <h3>Vendégfogadó italok</h3>
          <ul className="ul-width">
            <h4>Alkoholmentes Italok</h4>
            <li>
              Kávé, cappuccino, latte, /normál vagy alternatív tejjel/, Forró
              Tea
            </li>
            <li>Szénsavas és szénsavmentes ásványvíz</li>
            <li>
              Udvarházi szörpök: levendula, gyömbér és idény szörpök házilag
              készítve csapos üvegekben
            </li>
            <li>Udvarházi limonádék: citromos-mentás, uborkás-mentás víz</li>
            <li>Rostos: almalé, narancslé, baracklé</li>
            <li>
              Szénsavas: Coca Cola termékek: cola, zero, light, fanta, gyömbér,
              tonic
            </li>
          </ul>
          <ul className="ul-width">
            <h4>Alkoholos Italok</h4>
            <li>
              Csapolt sör: Staropramen világos sör, Bellevue belga meggysör
            </li>
            <li>
              Ház borai válogatás a Villányi borvidékről: Lelovits pincészet:
              olaszrizling, rosé cuvé, portugieser
            </li>
            <li>Kínáló rövid italok: 2 féle pálinka</li>
            <li>Mohito jégkása Bacardival vagy Aperol spritz</li>
          </ul>
          <h3>Vendégfogadó ételek</h3>
          <ul className="ul-width">
            <li>Sajtos és burgonyás házi sütésű pogácsa</li>
            <li>Házi rétes (meggyes, túrós)</li>
          </ul>
        </div>
      </Slide>
      <Slide left cascade>
        <div className="dinner-container">
          <h1 className="h1-menu-title" style={{ marginBottom: "0" }}>
            Vacsora ételek-italok
          </h1>
          <h1 className="h1-menu-title" style={{ marginTop: "0" }}>
            (19:00-tól)
          </h1>
          <h3>Vacsora italok</h3>
          <ul className="ul-width">
            <h4>Alkoholmentes Italok</h4>
            <li>
              Kávé, cappuccino, latte, /normál vagy alternatív tejjel/, Forró
              Tea
            </li>
            <li>Szénsavas és szénsavmentes ásványvíz, egyedi üveges szóda</li>
            <li>
              Udvarházi szörpök: levendula, gyömbér és idény szörpök házilag
              készítve csapos üvegekben
            </li>
            <li>Udvarházi limonádék: citromos-mentás, uborkás-mentás víz</li>
            <li>Rostos: almalé, narancslé, baracklé</li>
            <li>
              Szénsavas: Coca Cola termékek: cola, zero, light, fanta, gyömbér,
              tonic
            </li>
          </ul>
          <ul className="ul-width">
            <h4>Alkoholos Italok</h4>
            <li>
              Csapolt sör: Staropramen világos sör, Bellevue belga meggysör
            </li>
            <li>
              Ház borai válogatás a Villányi borvidékről: Lelovits pincészet:
              olaszrizling, rosé cuvé, portugieser
            </li>
            <li>2 féle pálinka</li>
            <li>Jägermaister</li>
            <li>Ballentines</li>
            <li>Baileys</li>
            <li>Finlandia vodka</li>
          </ul>
          <h3>Vacsora ételek</h3>

          <ul className="ul-width">
            <h4>Leves</h4>
            <li>Udvarházi Tyúkhúsleves kerti zöldségekkel, csigatésztával</li>
            <li>Meleg zöldség krémleves</li>
          </ul>

          <ul className="ul-width">
            <h4>Pörkölt</h4>
            <li>Marhapörkölt galuskával</li>
          </ul>

          <ul className="ul-width">
            <h4>4 személyes sültes tálak</h4>
            <h5>Kemencés sültek</h5>
            <li>Kemencében sült tarja</li>
            <li>Oldalas</li>
            <li>Csülök</li>
          </ul>
          <hr style={{ width: "65vw", color: "#c2a44f" }}></hr>

          <ul className="ul-width">
            <h5>Rántottak</h5>
            <li>Karaj</li>
            <li>Szezánmagos csirkemell</li>
            <li>Cordon blue</li>
            <li>Rántott gomba</li>
            <li>Rántott sajt</li>
          </ul>
          <hr style={{ width: "65vw", color: "#c2a44f" }}></hr>

          <ul className="ul-width">
            <h5>Grill</h5>
            <li>Mozarellás paradicsomos csirkemell</li>
            <li>Grill camambert sajt</li>
          </ul>
          <hr style={{ width: "65vw", color: "#c2a44f" }}></hr>

          <ul className="ul-width">
            <h5>Köret</h5>
            <li>Rizibizi</li>
            <li>Hagymás tört burgonya</li>
            <li>Grill zöldségek</li>
          </ul>
        </div>
      </Slide>
      <Slide right cascade>
        <div className="eveningmeal-container">
          <h1 className="h1-menu-title">Hajnali étkezés</h1>
          <ul className="ul-width">
            <li>
              Kemencés húsos töltött káposzta tejföllel, kemencés házi kenyérrel
            </li>
          </ul>
        </div>
      </Slide>
      <Slide left cascade>
        <div className="dessert-container">
          <h1 className="h1-menu-title">Desszert</h1>
          <ul className="ul-width">
            <li>Panna cotta szezonális gyümölcsökkel svédasztalon</li>
          </ul>
        </div>
      </Slide>
      <Slide right cascade>
        <div className="backToMainPage-container">
          <NavLink to="/main">
            <FormControl
              className="formControl"
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
                  marginTop: "1rem",
                  disabled: "disabled",
                }}
                endIcon={<SendIcon />}
              >
                Vissza
              </Button>
            </FormControl>
          </NavLink>
        </div>
      </Slide>
    </>
  );
};

export default withLayout(Menu, {
  onLogout: () => {
    alert("Logout");
  },
  isAuthenticated: true,
});

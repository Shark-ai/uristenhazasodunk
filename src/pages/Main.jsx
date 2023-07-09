import React, { useContext, useEffect, useState } from "react";
import withLayout from "../layout/WithLayout";

import Slide from "react-reveal/Slide";

import ScrollToTop from "../components/ScrollToTop";

import { Link, NavLink } from "react-router-dom";
import CustomizedTimeline from "../components/Timeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

import "../assets/style/Main.css";

import { UserContext } from "../provider/User.context";

const Main = () => {
  const { currentUser } = useContext(UserContext);
  const [name, setName] = useState();

  const initializeFields = () => {
    setName(currentUser[0].name);
  };

  useEffect(() => {
    if (currentUser && !name) {
      initializeFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initializeFields]);

  return (
    <main>
      <ScrollToTop />
      <section className="welcome-section">
        <h2 className="welcome">Kedves {name}</h2>
        <p className="text-width">
          Szeretettel meghívunk esküvőnkre, reméljük elfogadod meghívásunkat
        </p>
      </section>
      <Slide right cascade>
        <section className="location-section">
          <h1 className="h1-main-tittle">Helyszín</h1>
          <div>
            <NavLink
              style={{ color: "#c2a44f", textDecoration: "none" }}
              to="https://deakudvarhaz.com/"
            >
              <p className="location-text">
                Deák Udvarház&nbsp;
                <FontAwesomeIcon icon={faLocationPin} />
              </p>
            </NavLink>
            <p className="location-text">Nagyligetes tanya, Kakucs</p>
            <p className="text-width">
              A Deák Udvarházat családi vállalkozásként üzemelteti a Deák
              Család, melyet 2015-ben újonnan épített saját birtokára. A birtok
              Budapesttől 30 km-re, az M5 autópálya mentén, Kakucs mellett 4,5
              hektáron terül el. A gyönyörű, végtelen erdei környezetben, tóval
              az udvarán, virágokkal borított kerttel, kerítések nélkül
              élvezhetjük a természet és a rét panorámáját. Az Udvarház Kakucs
              települése felől végig újonnan aszfaltozott úton közelíthető meg
            </p>
          </div>
        </section>
      </Slide>
      <Slide left cascade>
        <section className="program-section">
          <h1 className="h1-main-tittle">Programok</h1>
          <div>
            <CustomizedTimeline></CustomizedTimeline>
          </div>
        </section>
      </Slide>
      <Slide right cascade>
        <section className="gifts-section">
          <h1 className="h1-main-tittle">Ajándékok</h1>
          <p className="text-width">
            Aki a nászutunkra szép ajándékot adna,<br></br>A reánk szánt
            összeget tegye bele borítékba:<br></br>A legtöbbet ugyanis ez
            jelenti nekünk,<br></br>Mert bizony messzire húz minket a szívünk!
            <br></br>Távoli vidékre, romantikus tájra, <br></br>Feledhetetlen
            kalandra, álmaink nászútjára!<br></br> Szívből köszönünk hát minden
            kilométert, <br></br> Mit ajándékotokból majd együtt élünk meg!
          </p>
        </section>
      </Slide>
      <Slide left cascade>
        <section className="faq-section">
          <h1 className="h1-main-tittle">
            Kérdések & <br></br>Válaszok
          </h1>
          <div className="question-group">
            <h3>Utazás</h3>
            <p className="question">Hogyan jutok ki a helyszínre?</p>
            <p className="answer">
              Autóval lehetséges a helyszín megközelítése (Az M5-ös autópályáról
              az Inárcsi pihenő-nél kell lehajtani{" "}
              <FontAwesomeIcon icon={faForward} /> Inárcs{" "}
              <FontAwesomeIcon icon={faForward} /> Kakucs{" "}
              <FontAwesomeIcon icon={faForward} /> Deák Udvarház).
            </p>
            <p className="question">Hol tudok parkolni?</p>
            <p className="answer">Díjmentesen lehet parkolni a helyszínen.</p>
            <p className="question">Hogy jutok haza?</p>
            <p className="answer">
              Lehetőség van szállás foglalására (lsd. Szállás), nagyobb létszám
              esetén egyszeri buszos fuvart tudunk biztosítani Budapestre
              (időpont megbeszélés szerint).
            </p>
          </div>
          <div className="question-group">
            <h3>Szállás</h3>
            <p className="question">Van lehetőség a helyszínen megszállni?</p>
            <p className="answer">
              Igen, az Udvarház 18 szobával rendelkezik, 16.000Ft/fő/éj áron.
            </p>
            <p className="question">Ez az ár mit tartalmaz?</p>
            <p className="answer">
              A morzsa reggelit és reggeli italokat a szoba ár tartalmazza
              minden ott alvó vendég részére, az esküvő másnapján 09.00-10.00
              közti svédasztalos felszolgálással.
            </p>
            <p className="question">
              Mikortól vehető át a szoba illetve meddig kell elhagyni?
            </p>
            <p className="answer">
              A szobákat 15:00-tól lehet átvenni, majd másnap 10:00-ig, a
              területet 11:00-ig szükséges elhagyni.
            </p>
            <p className="question">
              Hány ágyas szobák találhatók az Udvarházban?
            </p>
            <p className="answer">
              Az Udvarházban 4db 2 személyes, 2db 3 személyes és 11db 4
              személyes szoba található (a 3 - 4 ágyas szobákat lehetőség
              szerint ketten is kivehetitek illetve bizonyos szobák
              pótágyazhatóak).
            </p>
            <p className="question">Mikor és mivel tudok fizetni?</p>
            <p className="answer">
              A szobák elhagyása után tudod rendezni a számládat, SZÉP kártya
              elfogadása jelenleg nem elérhető, bankkártyás illetve készpénzes
              fizetés lehetséges.
            </p>
          </div>
          <div className="question-group">
            <h3>Kaja</h3>
            <p className="question">
              Milyen típusú italokra-ételekre számíthatok?
            </p>
            <p className="answer">
              Lásd a{" "}
              <Link
                style={{ color: "#c2a44f", textDecoration: "none" }}
                to="/menu"
              >
                Menü
              </Link>{" "}
              pontban.
            </p>
            <p className="question">Süssek sütit vagy hozzak pálinkát?</p>
            <p className="answer">
              Nem szükséges, a korlátlan ital-ételcsomagban minden megtalálható.
            </p>
            <p className="question">
              Tudok enni a tortából, hogy ételintoleranciám van?
            </p>
            <p className="answer">Igen, a tortánk mindenmentes lesz.</p>
            <p className="question">
              Speciális étrendem van, figyelnek erre a helyszínen
              (gluténérzékeny, laktózérzékeny, vegetáriános stb.)?
            </p>
            <p className="answer">
              Természetesen, kérünk töltsd ki az alábbi{" "}
              <Link
                style={{ color: "#c2a44f", textDecoration: "none" }}
                to="/input"
              >
                Kérdőívet
              </Link>
              .
            </p>
            <p className="question">Mi az a morzsa reggeli?</p>
            <p className="answer">
              A vacsoráról maradt finom fogások újra tálalása a reggelinél
              (9:00-10:00). Ha marad még a reggeliből és szeretnétek hazavinni,
              kérünk titeket hozzatok magatokkal ételhordót és szívesen
              csomagolunk.
            </p>
          </div>
          <div className="question-group">
            <h3>Egyéb apróságok</h3>
            <p className="question">
              Hozzhatok magammal gyereket, kiskedvencet?
            </p>
            <p className="answer">
              Nem, szeretnénk ha mindenkinek egy kikapcsolódás lenne az
              esküvőnk, kötöttségek nélkül.
            </p>
            <p className="question">Van dresscode?</p>
            <p className="answer">
              Részben. Különösebb kikötésünk nincsen, de szeretnénk megkérni a
              hölgyeket, hogy az esküvőnkön fehér, piros és fekete ruhát ne
              viseljenek.
            </p>
          </div>
        </section>
      </Slide>
      <Slide right cascade>
        <section className="contact-section">
          <h1 className="h1-main-tittle">Kapcsolat</h1>
          <div className="text-width">
            <p>Ha bármi kérdésed van írj/hívj minket.</p>
            <div className="contact-main">
              <ul className="telephone-main">
                Telefonszámaink:
                <li className="li-withoutMarker">
                  <a
                    style={{ color: "#c2a44f", textDecoration: "none" }}
                    href="tel:+36302725261"
                  >
                    +36 30 272 5261
                  </a>{" "}
                  (Viki)
                </li>
                <li className="li-withoutMarker">
                  <a
                    style={{ color: "#c2a44f", textDecoration: "none" }}
                    href="tel:+36308847326"
                  >
                    +36 30 884 7326
                  </a>{" "}
                  (Sanyi)
                </li>
              </ul>
              <ul className="email-main">
                Email címeink:
                <li className="li-withoutMarker">
                  <a
                    style={{ color: "#c2a44f", textDecoration: "none" }}
                    href="mailto:daranyi.vikii@gmail.com"
                  >
                    daranyi.vikii@gmail.com
                  </a>
                </li>
                <li className="li-withoutMarker">
                  <a
                    style={{ color: "#c2a44f", textDecoration: "none" }}
                    href="mailto:harkai.sandor91@gmail.com"
                  >
                    harkai.sandor91@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <br></br>
            <p>Vagy</p>
            <br></br>
            <p>Keress minket Facebookon</p>
          </div>
          <div className="socialicons-main">
            <NavLink to="https://www.facebook.com/viki.daranyi">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="social-icon__link"
                style={{ color: "rgb(46, 74, 119)" }}
              />
            </NavLink>
            <NavLink to="https://www.facebook.com/Harkai91">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="social-icon__link"
              />
            </NavLink>
          </div>
        </section>
      </Slide>
      <Slide left cascade>
        <section className="input-section">
          <h1 className="h1-main-tittle">Kérdőív</h1>
          <p className="text-width">
            Kérünk titeket, hogy legyetek segítségünkre az alábbi kérdőív
            kitöltésével, hogy minden pontosan legyen továbbítva a helyszín
            felé. A kérdőívet bármikor tudod módosítani, de kérünk legkésőbb
            2023.12.31.-ig küld el nekünk, hogy továbbíthassuk a helyszín felé.
          </p>
          <Link
            style={{
              color: "#c2a44f",
              textDecoration: "none",
              marginTop: "0.625rem",
            }}
            to="/input"
          >
            Kérdőív kitöltése
          </Link>
        </section>
      </Slide>
    </main>
  );
};

export default withLayout(Main, {
  onLogout: () => {
    alert("Logout");
  },
  isAuthenticated: true,
});

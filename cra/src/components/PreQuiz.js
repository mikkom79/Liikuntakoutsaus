import { useState } from "react";
import Slider from "./Slider";
import Header from "./Header";

const PreQuiz = ({ setPreDone }) => {
  const [showForm, setShowForm] = useState(false);
  const [showPreResult, setShowResult] = useState(false);
  const [values, setValues] = useState([5]);

  const LINK_HREF =
    "https://helsinginkaupunki.sharepoint.com/sites/Intra-Tyohyvinvointi-ja-tyoterveys";

  const PAGE_TITLE = "Työkykysi";
  const CONTENT = {
    c1: (
      <>
        <p className="lead-paragraph">
          KAKKA Haluaisitko löytää liikunta-alan ammattilaisen avulla sinulle
          mielekkäitä ja helposti toteutettavia keinoja lisätä kokonaisvaltaista
          hyvinvointia tukevaa liikuntaa?
        </p>
      </>
    ),
    c2: (
      <>
        <p>Oletetaan, että työkykysi on saanut parhaimmillaan 10 pistettä.</p>
        <p>
          <label>
            <strong>
              Minkä pistemäärän antaisit nykyiselle työkyvyllesi asteikolla
              0-10?
            </strong>
          </label>
        </p>
      </>
    ),
    c3: (
      <>
        <p className="pre-quiz-result-output">{values} / 10</p>
        <p>Vastauksesi perusteella koet työkykysi alentuneen.</p>
        <p>
          <strong>
            Tällä hetkellä emme suosittele sinulle Liikuntakoutsausta.
          </strong>{" "}
        </p>
        <div className="card">
          <h4>Pohdi omaa työkykyäsi:</h4>
          <ul>
            <li>Mitkä asiat vaikuttavat kokemukseesi työkyvystäsi?</li>
            <li>
              Pystytkö itse vaikuttamaan niihin ja huolehtimaan
              hyvinvoinnistasi, vai tarvitsetko tukea esimieheltäsi tai
              työterveyshuollosta?{" "}
            </li>
          </ul>
        </div>
      </>
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values < 6) {
      setShowResult(true);
    }
    if (values >= 6) {
      setPreDone(true);
    }
  };

  return (
    <>
      {!showForm && (
        <div className="container">
          <Header />
          <div className="sub-container">
            {CONTENT.c1}
            <div className="lead-card">
              <p>Testaa, olisiko liikuntakoutsaus sinun juttusi!</p>
              <div className="buttons-container">
                <button className="primary" onClick={() => setShowForm(true)}>
                  Tee testi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showForm && !showPreResult && (
        <form className="container" onSubmit={handleSubmit}>
          <h1>{PAGE_TITLE}</h1>
          <div className="sub-container">
            {CONTENT.c2}
            <span className="range-slider">
              <p style={{ marginRight: "0.5em" }}>0</p>
              <Slider values={values} setValues={setValues} />
              <p style={{ marginLeft: "0.5em" }}>10</p>
            </span>
          </div>
          <div className="buttons-container">
            <button type="submit">Lähetä vastaus</button>
          </div>
        </form>
      )}
      {showPreResult && (
        <div className="container">
          <h1>{PAGE_TITLE}</h1>
          <div className="sub-container">{CONTENT.c3}</div>
          <div className="buttons-container">
            <a
              className="primary"
              href={LINK_HREF}
              target="_blank"
              rel="noreferrer"
            >
              Työhyvinvointi & Työterveys
            </a>
            <button
              className="secondary"
              type="button"
              onClick={() => {
                setShowForm(false);
                setShowResult(false);
                setValues([5]);
              }}
            >
              Palaa alkuun
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreQuiz;

import { useState } from "react";
import Slider from "./Slider";

const PreQuiz = ({ setPreDone }) => {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState([5]);
  const [showPreResult, setShowResult] = useState(false);

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
          <div className="sub-container">
            <h1>Tarvitsetko tukea liikkumiseen?</h1>
            <p>
              Haluaisitko löytää liikunta-alan ammattilaisen avulla sinulle
              mielekkäitä ja helposti toteutettavia keinoja lisätä
              kokonaisvaltaista hyvinvointia tukevaa liikuntaa?
            </p>
            <p>Testaa, olisiko liikuntakoutsaus sinun juttusi!</p>
          </div>
          <div className="buttons-container">
            <button className="primary" onClick={() => setShowForm(true)}>
              Tee testi
            </button>
          </div>
        </div>
      )}

      {showForm && !showPreResult && (
        <form className="container" onSubmit={handleSubmit}>
          <div className="sub-container">
            <p>
              Oletetaan, että työkykysi on saanut parhaimmillaan 10 pistettä.
            </p>
            <p>
              <label>
                <strong>
                  Minkä pistemäärän antaisit nykyiselle työkyvyllesi asteikolla
                  0-10?
                </strong>
              </label>
            </p>
            <span className="range-slider">
              <p className="left" style={{ marginRight: "0.5em" }}>
                0
              </p>
              <Slider values={values} setValues={setValues} />
              <p className="right" style={{ marginLeft: "0.5em" }}>
                10
              </p>
            </span>
          </div>
          <div className="buttons-container">
            <button type="submit" className="pre">
              Lähetä vastaus
            </button>
          </div>
        </form>
      )}
      {showPreResult && (
        <div className="container">
          <div className="sub-container">
            <p>
              <em>
                Vastasit:
                <br />
                <strong>{values}/10</strong>
              </em>
            </p>
            <p>Vastauksesi perusteella koet työkykysi alentuneen.</p>
            <p>
              <strong>
                Tällä hetkellä emme suosittele sinulle Liikuntakoutsausta.
              </strong>{" "}
            </p>
            <div className="card">
              <h2>Pohdi omaa työkykyäsi:</h2>
              <ul>
                <li>Mitkä asiat vaikuttavat kokemukseesi työkyvystäsi?</li>
                <li>
                  Pystytkö itse vaikuttamaan niihin ja huolehtimaan
                  hyvinvoinnistasi, vai tarvitsetko tukea esimieheltäsi tai
                  työterveyshuollosta?{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="buttons-container">
            <a
              className="secondary"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              PlaceholderLinkki
            </a>
            <button
              className="primary"
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

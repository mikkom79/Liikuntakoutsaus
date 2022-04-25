import { useState } from "react";
import Slider from "./Slider";
import intro from "../img/intro.jpg";

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
        <div className="container intro">
          <div className="sub-container">
            <h1>Dolore enim officia eu ullamco?</h1>
            <p>
              Et in nisi commodo esse non dolore adipisicing qui aute culpa
              irure cupidatat. Qui pariatur reprehenderit est nostrud officia
              esse tempor dolore occaecat ad id elit.
              <br />
              Consequat consectetur aliquip enim nulla.
            </p>
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
              Velit elit culpa ea nisi aliquip consectetur commodo sit quis
              laborum magna Lorem. Deserunt laboris aliquip eu culpa. Mollit
              excepteur ex ex occaecat aliqua in Lorem excepteur?
            </p>
            <span className="range-slider">
              <p className="label left">0</p>
              <Slider values={values} setValues={setValues} />
              <p className="label right">10</p>
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
            <p>Vastasit:</p>
            <p>{values}/10</p>
            <p>Elit voluptate non quis occaecat aute eiusmod ullamco culpa.</p>
            <div className="card">
              <h2>Non labore cillum esse id:</h2>
              <ul>
                <li>Aute proident esse mollit qui proident.</li>
                <li>Ullamco anim consectetur amet id aliquip.</li>
                <li>Ut ipsum esse labore aute et adipisicing ut velit sint.</li>
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

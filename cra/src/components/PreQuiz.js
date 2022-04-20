import { useState } from "react";
import Slider from "./Slider";

const PreQuiz = ({ setPreDone }) => {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState([5]);
  const [showResult, setShowResult] = useState(false);

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
    <div className="container">
      {!showForm && (
        <p>
          Et in nisi commodo esse non dolore adipisicing qui aute culpa irure
          cupidatat. Qui pariatur reprehenderit est nostrud officia esse tempor
          dolore occaecat ad id elit.
          <br />
          Consequat consectetur aliquip enim nulla.
        </p>
      )}
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Tee testi</button>
      )}

      {showForm && !showResult && (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Lähetä vastaus</button>
        </form>
      )}
      {showResult && (
        <>
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
         
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              PlaceholderLinkki
            </a>
        </>
      )}
    </div>
  );
};

export default PreQuiz;

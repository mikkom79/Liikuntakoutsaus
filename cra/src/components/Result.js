const Result = ({ recommendCoaching, reset }) => {
  window.scrollTo(0, 0);

  return (
    <div className="container">
      <div className="sub-container">
        <h2>Testin tulos</h2>
        {recommendCoaching && (
          <>
            <h3>Suositellaan koutsausta.</h3>
            <p>
              Enim in veniam ex aliqua ad nostrud labore. Amet eu culpa fugiat
              eiusmod ad eu ex. Sit exercitation dolore excepteur mollit quis
              magna. Nostrud eiusmod elit occaecat in sint velit duis.
            </p>
          </>
        )}
        {!recommendCoaching && (
          <>
            <h3>Koutsausta ei suositella.</h3>
            <p>
              Laboris anim fugiat laboris qui. Nulla ut laborum pariatur est
              laboris est deserunt minim sunt qui occaecat esse cillum qui.
              Cupidatat dolor aliquip veniam adipisicing anim.
            </p>
          </>
        )}
      </div>
      <div className="card">
        <h4>Non labore cillum esse id:</h4>
        <ul>
          <li>Aute proident esse mollit qui proident.</li>
          <li>Ullamco anim consectetur amet id aliquip.</li>
          <li>Ut ipsum esse labore aute et adipisicing ut velit sint.</li>
        </ul>
      </div>
      <div className="card">
        <h4>Fugiat id cillum ad id nisi:</h4>
        <p>
          Pariatur incididunt ad id velit dolore ut reprehenderit duis nisi
          cupidatat Lorem irure. Ullamco laborum quis aliqua eu nisi sit non
          Lorem aute ut tempor nulla do. Proident excepteur aute ullamco aliqua
          enim enim elit enim nulla incididunt consequat adipisicing. Nisi culpa
          fugiat laborum veniam ea cupidatat excepteur nulla. Exercitation et eu
          nisi ex nostrud cillum anim consectetur.
        </p>
      </div>
      <div className="card">
        <h4>Yhteydenotot:</h4>
        <ul className="contact">
          <li>040 14522323</li>
          <li>09 23432213</li>
          <li>040 23165744</li>
          <li>09 21321321 </li>
        </ul>
      </div>
      <div className="buttons-container">
        {recommendCoaching && <button className="primary">Varaa aika</button>}
        {recommendCoaching && (
          <button className="secondary">Helmi-liikuntakoutsaus</button>
        )}
        <button
          className={recommendCoaching ? "secondary" : "primary"}
          type="button"
          onClick={() => reset()}
        >
          Palaa alkuun
        </button>
      </div>
    </div>
  );
};

export default Result;

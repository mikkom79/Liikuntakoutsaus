const Result = ({ recommendCoaching, reset }) => {
  return (
    <div>
      <h1>Tulokset</h1>
      {recommendCoaching && (
        <p>
          <strong>Suositellaan koutsausta.</strong>
          <br />
          Enim in veniam ex aliqua ad nostrud labore. Amet eu culpa fugiat
          eiusmod ad eu ex. Sit exercitation dolore excepteur mollit quis magna.
          Nostrud eiusmod elit occaecat in sint velit duis.
        </p>
      )}
      {!recommendCoaching && (
        <p>
          <strong>Koutsausta ei suositella.</strong>
          <br />
          Laboris anim fugiat laboris qui. Nulla ut laborum pariatur est laboris
          est deserunt minim sunt qui occaecat esse cillum qui. Cupidatat dolor
          aliquip veniam adipisicing anim.
        </p>
      )}
      <div className="card">
        <h2>Non labore cillum esse id:</h2>
        <ul>
          <li>Aute proident esse mollit qui proident.</li>
          <li>Ullamco anim consectetur amet id aliquip.</li>
          <li>Ut ipsum esse labore aute et adipisicing ut velit sint.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Fugiat id cillum ad id nisi:</h2>
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
        <h2>Yhteydenotot:</h2>
        <ul className="contact">
          <li>040 14522323</li>
          <li>09 23432213</li>
          <li>040 23165744</li>
          <li>09 21321321 </li>
        </ul>
      </div>
      {recommendCoaching && <button>Varaa aika</button>}
      {recommendCoaching && <button>Helmi-liikuntakoutsaus</button>}
      <button type="button" onClick={() => reset()}>
            Palaa alkuun
          </button>
    </div>
  );
};

export default Result;

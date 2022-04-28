const Result = ({ recommendCoaching, reset }) => {
  window.scrollTo(0, 0);
  //Koulutuskalenteri Onni
  const ONNI_HREF = "https://onni.hel.fi/DNN-login?returnurl=%2fOmaPalvelu";
  //Helmen liikuntakoutsaus sivujen linkki
  const KOUTSAUS_HREF =
    "http://helmi.hel.fi/henkilosto/Henkilostoedut/henkilostoliikunta/liikuntakoutsaus/Sivut/default.aspx";
  //henkilöstöliikunnan sivujen linkki
  const LIIKUNTATARJONTA_HREF =
    "http://helmi.hel.fi/henkilosto/Henkilostoedut/henkilostoliikunta/liikuntatarjonta/Sivut/default.aspx";

  return (
    <div className="container">
      <h1>Testin tulos</h1>
      <div className="sub-container">
        {recommendCoaching ? (
          <h3>Suosittelemme osallistumaan liikuntakoutsaukseen!</h3>
        ) : (
          <h3>
            Mahtavaa! Sinulla on jo aktiivisuutta arjessasi, jatka samaan
            malliin!
          </h3>
        )}
        {recommendCoaching && (
          <div className="card">
            <h4>Liikuntakoutsauksen kriteerit</h4>
            <ul>
              <li>Asteikolla 0–10 arvioin työkykyni olevan välillä 6–10</li>
              <li>Olen motivoitunut lisäämään liikuntaa omassa arjessani</li>
              <li>Liikun harvemmin kuin kerran viikossa</li>
            </ul>
          </div>
        )}
        {recommendCoaching && (
          <div className="card">
            <p>
              Liikuntakoutsaus on 6–8 kuukautta kestävä prosessi, joka sisältää
              4 tapaamiskertaa ja tähtää liikunnan lisäämiseen pienin askelin.
            </p>
            <p>
              Tapaamiskertojen tavoitteena on löytää keskustelun kautta
              konkreettisia tapoja liikkumisen lisäämiseksi.
            </p>
          </div>
        )}

        {recommendCoaching && (
          <div className="sub-container" style={{ paddingTop: "2em" }}>
            <p>
              Ota yhteyttä suoraan koutsiin tai varaa aika{" "}
              <a href={ONNI_HREF} target="_blank" rel="noreferrer">
                Koulutuskalenteri Onnin
              </a>{" "}
              kautta.
            </p>
            <p>Tervetuloa 😊</p>
          </div>
        )}
        {!recommendCoaching && (
          <div className="sub-container">
            <p>
              Jos tilanteesi muuttuu merkittävästi, käy kurkkaamassa osoitteessa{" "}
              <a href={KOUTSAUS_HREF} target="_blank" rel="noreferrer">
                Liikuntakoutsaus (hel.fi)
              </a>
            </p>
            <p>
              Tutustu myös{" "}
              <a href={LIIKUNTATARJONTA_HREF} target="_blank" rel="noreferrer">
                {" "}
                Liikuntatarjontaan (hel.fi)
              </a>
            </p>
          </div>
        )}
        {!recommendCoaching && (
          <div className="card">
            <h4>Lisätiedot:</h4>
            <ul className="contact">
              <li>040 1882130 </li>
              <li>09 310 22674 </li>
              <li>040 1946077 </li>
              <li>09 310 21670 </li>
            </ul>
          </div>
        )}
      </div>
      <div className="buttons-container">
        {recommendCoaching && (
          <a
            className="primary"
            href={ONNI_HREF}
            target="_blank"
            rel="noreferrer"
          >
            Varaa aika
          </a>
        )}
        {recommendCoaching && (
          <a
            className="primary"
            href={KOUTSAUS_HREF}
            target="_blank"
            rel="noreferrer"
          >
            Liikuntakoutsaus (hel.fi)
          </a>
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

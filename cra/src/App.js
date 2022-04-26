import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Quiz from "./components/Quiz";
import PreQuiz from "./components/PreQuiz";
import Result from "./components/Result";

function App() {
  const alertIcon = ""; //insert hds icon here

  const [preDone, setPreDone] = useState(false);
  // onko alkukartoitus (työkyky 0-10) tehty
  const [quizDone, setQuizDone] = useState(false);
  // onko pääkysely tehty
  const [recommendCoaching, setRecommendCoaching] = useState(undefined);
  // kyselyn tulos (pistekertymän mukaan)
  const [showErrorModal, setShowErrorModal] = useState(false);
  // virheilmoitus, jos käyttäjä yrittää lähettää puutteellisen kyselyn
  const onCloseModal = () => setShowErrorModal(false);
  // sulkee virheilmoituksen
  const reset = () => {
    setQuizDone(false);
    setPreDone(false);
  };

  return (
    <div className="App">
      {!preDone && <PreQuiz setPreDone={setPreDone} />}
      {preDone && !quizDone && (
        <Quiz
          setQuizDone={setQuizDone}
          setRecommendCoaching={setRecommendCoaching}
          setShowErrorModal={setShowErrorModal}
        />
      )}
      {quizDone && (
        <Result recommendCoaching={recommendCoaching} reset={reset} />
      )}

      <Modal open={showErrorModal} onClose={onCloseModal} center>
        <p className="modal" data-icon={alertIcon}>
          Vastaa kaikkiin kysymyksiin.
        </p>
      </Modal>
    </div>
  );
}

export default App;

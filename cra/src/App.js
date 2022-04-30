import { useState } from "react";
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
        />
      )}
      {quizDone && (
        <Result recommendCoaching={recommendCoaching} reset={reset} />
      )}
    </div>
  );
}

export default App;

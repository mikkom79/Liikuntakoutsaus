import { useState } from "react";
import Form from "./components/Form";
import PreQuiz from "./components/PreQuiz";
import Result from "./components/Result";

function App() {

   const [preDone, setPreDone] = useState(false);
   const [quizDone, setQuizDone] = useState(false);
   const [recommendCoaching, setRecommendCoaching] = useState(undefined);

 //tarkista, onko alkukartoitus (työkyky 0-10) tehty
  return (
    <div className="App">
      {!preDone && <PreQuiz setPreDone={setPreDone} />}
      {preDone && !quizDone && <Form setQuizDone={setQuizDone} setRecommendCoaching={setRecommendCoaching} />}
      {quizDone && <Result recommendCoaching={recommendCoaching}/>}
    </div>
  );
}

export default App;

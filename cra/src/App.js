import { useState } from "react";
import Form from "./components/Form";
import PreQuiz from "./components/PreQuiz";

function App() {

   const [preDone, setPreDone] = useState(false);
   const [quizDone, setQuizDone] = useState(false);
   const [quizResult, setQuizResult] = useState(undefined);

 //tarkista, onko alkukartoitus (työkyky 0-10) tehty
  return (
    <div className="App">
      {!preDone && <PreQuiz setPreDone={setPreDone} />}
      {preDone && <Form />} 
    </div>
  );
}

export default App;

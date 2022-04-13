import { useState } from 'react';
import Quiz from './components/Quiz';

function App() {
  
  const [preQuestionnaireDone, setPreQuestionnaireDone] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // { preQuestionnaireDone &&  

  return (
    <div className="App">
     <Quiz />
    </div>
  );
}

export default App;

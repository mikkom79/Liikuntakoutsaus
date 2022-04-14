import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [preDone, setPreDone] = useState(true);
 //tarkista, onko alkukartoitus (työkyky 0-10) tehty
  return (
    <div className="App">
      {preDone && <Form />} 
    </div>
  );
}

export default App;

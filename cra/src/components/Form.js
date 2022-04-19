import { useReducer } from "react";
import Section from "./Section";

const Form = () => {
  const initialState = { step: 1 };

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return { step: state.step + 1 };
      case "previous":
        return { step: state.step - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const questions = [
    {
      questionTitle: "QuestionTitle1",
      answerOptions: [
        { id: "1A", optionText: "Option 1A", addPoint: false },
        { id: "1B", optionText: "Option 1B", addPoint: true },
        { id: "1C", optionText: "Option 1C", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitle2",
      answerOptions: [
        { id: "2A", optionText: "Option 2A", addPoint: false },
        { id: "2B", optionText: "Option 2B", addPoint: true },
        { id: "2C", optionText: "Option 2C", addPoint: false },
        { id: "2D", optionText: "Option 2D", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitle3",
      answerOptions: [
        { id: "3A", optionText: "Option 3A", addPoint: false },
        { id: "3B", optionText: "Option 3B", addPoint: true },
        { id: "3C", optionText: "Option 3C", addPoint: false },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      
      <Section step={state.step} questions={questions} /> 

      {state.step === questions.length + 1 && (
          <button type="submit">Lähetä vastaukset</button>
      )}

      {state.step !== questions.length + 1 && (
        <button id="next" onClick={() => dispatch({ type: "next" })}>
          Seuraava
        </button>
      )}

      {state.step !== 1 && (
        <button id="prev" onClick={() => dispatch({ type: "previous" })}>
          Edellinen
        </button>
      )}
    </form>
  );
};

export default Form;

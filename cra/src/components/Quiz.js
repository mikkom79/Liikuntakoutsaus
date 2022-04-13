import { useState, useReducer } from "react";
import FormStep from "./FormStep";

const Quiz = () => {
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
      questionTitle: "QuestionTitleA",
      answerOptions: [
        { id: 1, optionText: "Option A1", addPoint: false },
        { id: 2, optionText: "Option A2", addPoint: true },
        { id: 3, optionText: "Option A3", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitleB",
      answerOptions: [
        { id: 1, optionText: "Option B1", addPoint: false },
        { id: 2, optionText: "Option B2", addPoint: true },
        { id: 3, optionText: "Option B3", addPoint: false },
        { id: 4, optionText: "Option B3", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitleC",
      answerOptions: [
        { id: 1, optionText: "Option C1", addPoint: false },
        { id: 2, optionText: "Option C2", addPoint: true },
        { id: 3, optionText: "Option C3", addPoint: false },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      {state.step && (
        <FormStep
          questions={questions}
          step={state.step}
          handleChange={handleChange}
        />
      )}

      {state.step !== 1 && (
        <button id="prev" onClick={() => dispatch({ type: "previous" })}>
          Edellinen
        </button>
      )}
      {state.step !== questions.length && (
        <button id="next" onClick={() => dispatch({ type: "next" })}>
          Seuraava
        </button>
      )}
    </form>
  );
};

export default Quiz;

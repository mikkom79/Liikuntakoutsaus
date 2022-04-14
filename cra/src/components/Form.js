import { useState, useReducer } from "react";
import Section from "./Section";
import Summary from "./Summary";

const Form = () => {
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();

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

  const handleChange = (e) => {
    switch (e.target.name) {
      case "question1":
        setAnswer1(e.target.value);
        break;
      case "question2":
        setAnswer2(e.target.value);
        break;
      case "question3":
        setAnswer3(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      {state.step !== questions.length+1 && (
        <Section
          questions={questions}
          step={state.step}
          onChange={handleChange}
        />
      )}

      {state.step !== questions.length+1 && (
        <button id="next" onClick={() => dispatch({ type: "next" })}>
          Seuraava
        </button>
      )}

      {state.step !== 1 && (
        <button id="prev" onClick={() => dispatch({ type: "previous" })}>
          Edellinen
        </button>
      )}

      {state.step === questions.length+1 &&
      <Summary
      questions={questions}
      answer1={answer1}
      answer2={answer2}
      answer3={answer3}
      />}
     
    </form>
  );
};

export default Form;

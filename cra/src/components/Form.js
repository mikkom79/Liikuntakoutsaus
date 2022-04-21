import { useReducer, useState } from "react";
import Section from "./Section";

const Form = ({ setQuizDone, setRecommendCoaching, setShowErrorModal }) => {
  const threshold = 3; //minimum amount of points needed for the coaching to be recommended
  
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
        { id: "1A", optionText: "Option 1A", addPoint: true },
        { id: "1B", optionText: "Option 1B", addPoint: false },
        { id: "1C", optionText: "Option 1C", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitle2",
      answerOptions: [
        { id: "2A", optionText: "Option 2A", addPoint: true },
        { id: "2B", optionText: "Option 2B", addPoint: false },
        { id: "2C", optionText: "Option 2C", addPoint: false },
        { id: "2D", optionText: "Option 2D", addPoint: false },
      ],
    },
    {
      questionTitle: "QuestionTitle3",
      answerOptions: [
        { id: "3A", optionText: "Option 3A", addPoint: true },
        { id: "3B", optionText: "Option 3B", addPoint: false },
        { id: "3C", optionText: "Option 3C", addPoint: false },
      ],
    },
  ];

  const [answers, setAnswers] = useState({
    answer1: undefined,
    answer2: undefined,
    answer3: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let isComplete = true; //defaults to true

    Object.values(answers).map((value) => {
      if (!value) {
        isComplete = false;
      }
    });
    if (!isComplete) {
      //if any of answers is undefined, do not calculate points
      setShowErrorModal(true);
      return;
    }
    let totalPoints = 0;
    Object.values(answers).map((value, index) => {
      const option = questions[index].answerOptions.find(
        (question) => question.id === value
      );
      if (option?.addPoint) {
        totalPoints++;
      }
    });
    console.log(totalPoints);
    setRecommendCoaching(totalPoints >= threshold ? true : false);
    setQuizDone(true);
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      <Section
        step={state.step}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
      />

      {state.step === questions.length + 1 && (
        <button type="submit">Lähetä vastaukset</button>
      )}

      {state.step !== questions.length + 1 && (
        <button
          type="button"
          id="next"
          onClick={() => dispatch({ type: "next" })}
        >
          Seuraava
        </button>
      )}

      {state.step !== 1 && (
        <button
          type="button"
          id="prev"
          onClick={() => dispatch({ type: "previous" })}
        >
          Edellinen
        </button>
      )}
    </form>
  );
};

export default Form;

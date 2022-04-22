import { useReducer, useState } from "react";
import Section from "./Section";

const Quiz = ({ setQuizDone, setRecommendCoaching, setShowErrorModal }) => {
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
      questionTitle:
        "Mollit excepteur voluptate adipisicing sint occaecat labore et eiusmod labore.",
      answerOptions: [
        {
          id: "1A",
          optionText:
            "Adipisicing ipsum minim enim aliquip eiusmod reprehenderit",
          addPoint: true,
        },
        {
          id: "1B",
          optionText: "Exercitation ut qui non irure quis excepteur.",
          addPoint: false,
        },
        {
          id: "1C",
          optionText:
            "Aliqua laboris officia non sunt cillum sint commodo fugiat labore qui velit laboris.",
          addPoint: false,
        },
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
    <form className="container" onSubmit={handleSubmit}>
      <Section
        step={state.step}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
      />

      <div className="buttons-container">
        {state.step !== 1 && (
          <button
            className="secondary prev"
            type="button"
            id="prev"
            onClick={() => dispatch({ type: "previous" })}
          >
            Edellinen
          </button>
        )}

        {state.step !== questions.length + 1 && (
          <button
            className="secondary next"
            type="button"
            id="next"
            onClick={() => dispatch({ type: "next" })}
          >
            Seuraava
          </button>
        )}
        {state.step === questions.length + 1 && (
          <button type="submit">Lähetä vastaukset</button>
        )}
      </div>
    </form>
  );
};

export default Quiz;

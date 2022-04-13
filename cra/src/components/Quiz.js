import { useState } from "react";
import FormStep from "./FormStep";

const Quiz = () => {
  const USER_ANSWERS = ["", "", ""]; //store user's answers temporarily

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

  const [formStep, setFormStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState(USER_ANSWERS);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*  */

  const handleChange = (e) => {};

  const handleSteps = (e) => {};

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      {formStep && (
        <FormStep
          questions={questions}
          step={formStep}
          handleChange={handleChange}
        />
      )}

      {formStep !== 1 && <button>Edellinen</button>}
      {formStep !== questions.length && <button>Seuraava</button>}

      <p>current answers:{userAnswers[1]}</p>
    </form>
  );
};

export default Quiz;

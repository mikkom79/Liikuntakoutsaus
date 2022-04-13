import { useState } from "react";
import FormStep from "./FormStep";

const Quiz = () => {
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
  const [questionAnswer1, setquestionAnswer1] = useState("");
  const [questionAnswer2, setquestionAnswer2] = useState("");
  const [questionAnswer3, setquestionAnswer3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*  */

  const handleChange = (e) => {};

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      {formStep &&
      <FormStep
      questions={questions}
      step={formStep}
      handleChange={handleChange}/>}
    </form>
  );
  //
};

export default Quiz;

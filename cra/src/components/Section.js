import { useState } from "react";
import Radiobutton from "./Radiobutton";
import Summary from "./Summary";

const Section = ({ questions, step }) => {
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  //change this to useContext hook?

  const handleChange = (e) => {
    console.log(e.target.value);
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
    <section>
      <span className="step-tracker">
        {step}/{questions.length + 1}
      </span>
      {step === questions.length + 1 ? (
        <h1>Yhteenveto</h1>
      ) : (
        <h1>{questions[step - 1].questionTitle}</h1>
      )}
      <ul>
        {step === 1 &&
          questions[step - 1].answerOptions.map((option) => (
            <Radiobutton
              key={option.id}
              label={option.optionText}
              value={option.id}
              name={`question${step}`}
              onChange={handleChange}
              checked={answer1 === option.id}
            />
          ))}
        {step === 2 &&
          questions[step - 1].answerOptions.map((option) => (
            <Radiobutton
              key={option.id}
              label={option.optionText}
              value={option.id}
              name={`question${step}`}
              onChange={handleChange}
              checked={answer2 === option.id}
            />
          ))}
        {step === 3 &&
          questions[step - 1].answerOptions.map((option) => (
            <Radiobutton
              key={option.id}
              label={option.optionText}
              value={option.id}
              name={`question${step}`}
              onChange={handleChange}
              checked={answer3 === option.id}
            />
          ))
        }

        {step === questions.length + 1 && (
          <Summary
            questions={questions}
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
          />
        )}
      </ul>
    </section>
  );
};

export default Section;

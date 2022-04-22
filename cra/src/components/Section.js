import Radiobutton from "./Radiobutton";
import Summary from "./Summary";

const Section = ({ questions, step, answers, setAnswers }) => {
  const handleChange = (value) => {
    console.log(value);
    const _answers = { ...answers };
    _answers[`answer${step}`] = value;
    //insert the answers into an array before assigning it to setAnswers
    setAnswers(_answers);
  };

  return (
    <>
      <span className="step-tracker">
        {step}/{questions.length + 1}
      </span>
      {step !== questions.length + 1 && (
        <fieldset>
          <legend>{questions[step - 1].questionTitle}</legend>
          {questions[step - 1].answerOptions.map((option) => (
            <Radiobutton
              key={option.id}
              label={option.optionText}
              value={option.id}
              name={`question${step}`}
              onChange={handleChange}
              checked={answers[`answer${step}`] === option.id}
            />
          ))}
        </fieldset>
      )}

      {step === questions.length + 1 && (
        <Summary questions={questions} answers={answers} />
      )}
    </>
  );
};

export default Section;

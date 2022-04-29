import Radiobutton from "./Radiobutton";
import Summary from "./Summary";

const Section = ({
  questions,
  step,
  answers,
  setAnswers,
  answersText,
  setAnswersText,
  jumpTo,
}) => {
  const handleChange = (value, label) => {
    const _answers = { ...answers };
    _answers[`answer${step}`] = value;
    //insert the answers into an array before assigning it to setAnswers
    setAnswers(_answers);

    const _answersText = { ...answersText };
    _answersText[`answerText${step}`] = label;
    //insert the answers-labels into an array before assigning it to setAnswersText
    setAnswersText(_answersText);
  };

  return (
    <>
      {step <= questions.length && (
        <>
          <span className="step-tracker">
            {step}/{questions.length}
          </span>
          <fieldset className="sub-container">
            <legend>{questions[step - 1].questionTitle}</legend>
            <ul className="radio-list">
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
            </ul>
          </fieldset>
        </>
      )}

      {step > questions.length && (
        <Summary
          questions={questions}
          answersText={answersText}
          jumpTo={jumpTo}
        />
      )}
    </>
  );
};

export default Section;

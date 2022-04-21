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
    <section>
      <span className="step-tracker">
        {step}/{questions.length + 1}
      </span>
      {step !== questions.length + 1 && (
        <>
          <h1>{questions[step - 1].questionTitle}</h1>
          <ul>
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
        </>
      )}

      {step === questions.length + 1 && (
        <Summary questions={questions} answers={answers} />
      )}
    </section>
  );
};

export default Section;

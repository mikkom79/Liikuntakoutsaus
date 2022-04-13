import Radiobutton from "./Radiobutton";

const FormStep = ({ questions, step, handleChange }) => {
  return (
    <section>
      <span className="step-tracker">{step}/{questions.length}</span>
      <h1>{questions[step - 1].questionTitle}</h1>
      <ul>
      {questions[step - 1].answerOptions.map((option) => (
        <Radiobutton
          key={option.id}
          label={option.optionText}
          value={option.id}
          name={`question${step}`}
          onChange={handleChange}
        />
        
      ))}
      </ul>
    </section>
  );
};

export default FormStep;

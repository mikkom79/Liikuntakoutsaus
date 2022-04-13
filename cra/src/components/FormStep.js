import Radiobutton from "./Radiobutton";

const FormStep = ({ questions, step, handleChange }) => {
  return (
    <section>
      <span>{step}/{questions.length}</span>
      <p>{questions[step - 1].questionTitle}</p>
      {questions[step - 1].answerOptions.map((option) => (
        <Radiobutton
          key={option.id}
          label={option.optionText}
          value={option.id}
          name={`question${step}`}
          onChange={handleChange}
        />
      ))}
    </section>
  );
};

export default FormStep;

const Summary = ({ questions, answers }) => {
  const questionsArr = questions.map((question) => question.questionTitle);
  const TEXT_BEFORE = "Vastaus: ";
  const TEXT_ALT = "Ei vastausta";

  return (
    <ol className="summary">
      {questionsArr.map((question, index) => {
        return (
          <li key={question}>
            <h1>{question}</h1>
            <p>
              {TEXT_BEFORE}
              {Object.values(answers)[index] || TEXT_ALT}
            </p>
            {/*Object.values = js magic*/}
          </li>
        );
      })}
    </ol>
  );
};

export default Summary;

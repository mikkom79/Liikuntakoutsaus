const Summary = ({ questions, answers }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  const TEXT_BEFORE = "Vastaus: ";
  const TEXT_ALT = "Ei vastausta";

  return (
    <ol className="summary">
      {titlesArr.map((title, index) => {
        return (
          <li key={index}>
            <h2>{title}</h2>
            <span className="summary label">{TEXT_BEFORE}</span>
             <p className="summary answer">{Object.values(answers)[index] || TEXT_ALT}</p>
            {/*Object.values = js magic*/}
          </li>
        );
      })}
    </ol>
  );
};

export default Summary;

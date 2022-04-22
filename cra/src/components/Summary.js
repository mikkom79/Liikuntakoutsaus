const Summary = ({ questions, answersText }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  const TEXT_BEFORE = "Vastaus: ";
  const TEXT_ALT = "Ei vastausta";

  return (
    <div className="sub-container">
      <h2>Yhteenveto vastauksista</h2>
      <ol className="summary">
        {titlesArr.map((title, index) => {
          return (
            <li key={index}>
              <p>{title}</p>
              <span className="summary label">{TEXT_BEFORE}</span>
              {Object.values(answersText)[index] === undefined ? (
                <p className="summary no-answer">{TEXT_ALT}</p>
              ) : (
                <p>{Object.values(answersText)[index]}</p>
              )}
              {/*Object.values = js magic*/}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;

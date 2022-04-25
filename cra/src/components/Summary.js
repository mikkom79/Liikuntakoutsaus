const Summary = ({ questions, answersText }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  const TEXT_ALT = "Ei vastausta";

  return (
    <div className="sub-container">
      <h1>Yhteenveto</h1>
      <ol className="summary">
        {titlesArr.map((title, index) => {
          return (
            <li
              key={index}
              className={
                Object.values(answersText)[index] === undefined
                  ? "summary no-answer"
                  : "summary answer"
              }
            >
              <h2 className="summary-title">{title}</h2>

              {Object.values(answersText)[index] === undefined ? (
                <p className="summary no-answer">{TEXT_ALT}</p>
              ) : (
                <p className="summary answer" data-text="Vastaus:">
                  "{Object.values(answersText)[index]}"
                </p>
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

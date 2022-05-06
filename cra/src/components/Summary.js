const Summary = ({ questions, answersText, jumpTo }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  const TEXT_ALT = "Vastaa kysymykseen >>";
  window.scrollTo(0, 0);
  return (
    <div className="sub-container">
      <h1>Yhteenveto</h1>
      <ol className="summary-list">
        {titlesArr.map((title, index) => {
          return (
            <li
              key={index}
              className={
                Object.values(answersText)[index] === undefined
                  ? "summary not-answered"
                  : "summary"
              }
              onClick={() => {
                if (Object.values(answersText)[index] === undefined) {
                  jumpTo(index); //if the answers contain an unanswered item, clicking it triggers a jump to said question
                }
              }}
            >
              <div className="summary-question-text-container">
                <p>{title}</p>
              </div>

              <div className="summary-answer-text-container">
                {Object.values(answersText)[index] === undefined ? (
                  <p>{TEXT_ALT}</p>
                ) : (
                  <p>"{Object.values(answersText)[index]}"</p>
                )}
              </div>
              {/*Object.values = js magic*/}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;

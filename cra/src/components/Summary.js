const Summary = ({ questions, answersText, jumpTo }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  const TEXT_ALT = "Ei vastausta";
  window.scrollTo(0, 0);
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
              onClick={() => {
                if (Object.values(answersText)[index] === undefined) {
                  jumpTo(index); //if the answers contain an unanswered item, clicking it triggers a jump to said question
                }
              }}
            >
              <p className="summary-title" data-text="Kysymys:">
                {title}
              </p>

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

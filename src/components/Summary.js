const Summary = ({ questions, answersText }) => {
  const titlesArr = questions.map((question) => question.questionTitle);
  window.scrollTo(0, 0);
  return (
    <div className="sub-container">
      <h1>Yhteenveto</h1>
      <ol className="summary-list">
        {titlesArr.map((title, index) => {
          return (
            <li key={index} className="summary">
              <div className="summary-question-text-container">
                <p>{title}</p>
              </div>

              <div className="summary-answer-text-container">
                <p>"{Object.values(answersText)[index]}"</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;

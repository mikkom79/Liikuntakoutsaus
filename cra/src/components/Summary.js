const Summary = ({ questions, answer1, answer2, answer3 }) => {
  const questionsArr = questions.map((question) => question.questionTitle);
  const TEXT_BEFORE = "Vastaus: ";
  const TEXT_ALT = "Ei vastausta";

  return (
    <ul className="summary">
      <li>
        <p>{questionsArr[0]}</p>
        <p>
          {TEXT_BEFORE}
          {answer1 || TEXT_ALT}
        </p>
      </li>
      <li>
        <p>{questionsArr[1]}</p>
        <p>
          {TEXT_BEFORE}
          {answer2 || TEXT_ALT}
        </p>
      </li>
      <li>
        <p>{questionsArr[2]}</p>
        <p>
          {TEXT_BEFORE}
          {answer3 || TEXT_ALT}
        </p>
      </li>
    </ul>
  );
};

export default Summary;

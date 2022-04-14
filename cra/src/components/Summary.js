const Summary = ({answers}) => {
    return ( 
        <ul>
            {answers.map((answer) => (
            <li key={answer.q}>
            <p>Question: {answer.q}</p>
            <p>Answer: {answer.a}</p>
            </li>))}
        </ul>
     );
}
 
export default Summary;
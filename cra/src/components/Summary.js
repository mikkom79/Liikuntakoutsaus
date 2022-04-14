const Summary = ({answers}) => {
    return ( 
        <div>
            {answers.map((answer) => (
            <>
            <p>Question: {answer.q}</p>
            <p>Answer: {answer.a}</p>
            </>))}
        </div>
     );
}
 
export default Summary;
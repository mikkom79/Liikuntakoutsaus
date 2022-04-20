const Result = ({recommendCoaching}) => {
    return ( <div>
        <h1>Tulokset</h1>
        {recommendCoaching ? 
        <p>coaching recommended</p> : 
        <p>no coaching recommended</p>}
    </div> );
}
 
export default Result;
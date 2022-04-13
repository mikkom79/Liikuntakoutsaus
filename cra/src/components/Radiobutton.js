const Radiobutton = ({label,value,questionID,addPoint,onChange}) => {
    return ( 
        <input type="radio" value={value} name={questionID} addPoint={addPoint} onChange={onChange}><label>{label}</label></input>
     );
}
 
export default Radiobutton;
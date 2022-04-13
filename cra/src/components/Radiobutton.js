const Radiobutton = ({label, value, name, onChange}) => {
    return (  
    <li>
        <label for={value}>{label}</label>
        <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}/>
    </li>
    );
}
 
export default Radiobutton;
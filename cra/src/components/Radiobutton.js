const Radiobutton = ({label, value, name, onChange}) => {
    return (  
    <li>
        <label>{label}</label>
        <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}>
        </input>
    </li>
    );
}
 
export default Radiobutton;
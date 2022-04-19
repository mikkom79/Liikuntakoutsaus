const Radiobutton = ({ label, value, name, onChange, checked }) => {
  return (
    <li>
      <input type="radio" value={value} name={name} onChange={onChange} checked={checked}/>
      <label htmlFor={value}>{label}</label>
    </li>
  );
};

export default Radiobutton;

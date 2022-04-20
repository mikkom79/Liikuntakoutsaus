const Radiobutton = ({ label, value, name, onChange, checked }) => {
  return (
    <li>
      <input type="radio" name={name} onChange={() => onChange(value)} checked={checked}/>
      <label htmlFor={value} onClick={() => onChange(value)}>{label}</label>
    </li>
  );
};

export default Radiobutton;

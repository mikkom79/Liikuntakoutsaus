const Radiobutton = ({ label, value, name, onChange }) => {
  return (
    <li>
      <input type="radio" value={value} name={name} onChange={onChange} />
      <label htmlFor={value}>{label}</label>
    </li>
  );
};

export default Radiobutton;

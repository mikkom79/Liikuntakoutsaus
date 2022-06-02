const Radiobutton = ({ label, value, name, onChange, checked }) => {
  return (
    <li className="radio-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={() => onChange(value, label)}
        checked={checked}
      />
      <label
        className={checked ? "radio-label checked" : "radio-label"}
        htmlFor={value}
        onClick={() => onChange(value, label)}
      >
        {label}
      </label>
    </li>
  );
};

export default Radiobutton;

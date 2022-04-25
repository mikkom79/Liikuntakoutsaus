const Radiobutton = ({ label, value, name, onChange, checked }) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        name={name}
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
    </div>
  );
};

export default Radiobutton;

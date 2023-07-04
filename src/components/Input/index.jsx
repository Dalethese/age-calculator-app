import PropTypes from "prop-types";

export default function Input({ label, placeholder, handleChange }) {
  return (
    <label htmlFor={label} style={{ textTransform: "uppercase" }}>
      {label}
      <input
        type="number"
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={handleChange(label)}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

Input.defaultProps = {
  label: "",
  placeholder: "",
  handleChange: "",
};

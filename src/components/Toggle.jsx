import "./Toggle.css";

export const Toggle = (props) => {
  const { handleChange, isChecked } = props;
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      ></input>
      {/* allows us to trigger the input when the label is getting collected */}
      {/* how to write in a condition */}
      <label htmlFor="check"> Mode {isChecked ? "dark" : "light"}</label>
    </div>
  );
};

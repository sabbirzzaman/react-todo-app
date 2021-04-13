import React from "react";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        type="text"
        placeholder="Add todo..."
        autoFocus
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default Form;

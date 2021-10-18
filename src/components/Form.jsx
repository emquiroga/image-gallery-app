import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputText" className="w-75">
        Buscar:
        <input
          type="text"
          name="inputText"
          className="input-group-text w-100"
        />
      </label>
      <button type="submit" className="btn btn-info mx-2">
        <span className="material-icons">search</span>
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;

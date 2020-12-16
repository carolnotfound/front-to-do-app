import React from "react";
import BaseButton from "../../../template/button/baseButton";

export default (props) => {
  return (
    <form className="row align-items-end mb-3">
      <div className="col">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            className="form-control"
            aria-describedby="taskDescription"
            value={props.description}
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="col-auto">
        <BaseButton label="Add Task" click={props.handleAdd} />
      </div>
    </form>
  );
};

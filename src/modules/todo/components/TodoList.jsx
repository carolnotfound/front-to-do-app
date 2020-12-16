import React from "react";
import IconButton from "../../../template/button/iconButton";

export default (props) => {
  const itemStyle = (item, index) => {
    const text = (
      <span>
        <strong>{index + 1}.</strong> {item.description}
      </span>
    );

    if (item.done) {
      return <s>{text}</s>;
    }

    return text;
  };

  const listItems = props.list.map((item, index) => (
    <li
      key={item._id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.done}
          onChange={() => props.handleItemIsDone(item)}
          id={`item_${item._id}`}
        />

        <label className="form-check-label" htmlFor={`item_${item._id}`}>
          {itemStyle(item, index)}
        </label>
      </div>

      <IconButton
        icon="fa fa-trash"
        click={() => props.handleDelete(item._id)}
        style="btn-danger"
      />
    </li>
  ));

  return <ul className="list-group list-group-flush">{listItems}</ul>;
};

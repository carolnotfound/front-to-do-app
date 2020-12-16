import React from "react";

export default (props) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        <i className="fa fa-calendar-check-o"></i> ToDoApp
      </a>

      <button
        className="navbar-toggler"        
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#/todo-list">
              Tasks <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

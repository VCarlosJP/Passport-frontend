import React from "react";




export default class Operations extends React.Component {
  
  render() {

    let pathName = window.location.pathname;
    return (
      <div className="content-header">
        <div className="dimelo">
          <h1 className="title is-1 content-title">Operations</h1>
          <ul className="options-list">
            <li className={pathName === "/expenses" ? "active-option" : null}>
              Expenses
            </li>
            <li className={pathName === "/debts" ? "active-option" : null}>Debts</li>
            <li className={pathName === "/graphs" ? "active-option" : null}>
              Graphs
            </li>
          </ul>
        </div>
        <h2 className="title is-2 testing">€1,024.00</h2>
      </div>
    );
  }
}

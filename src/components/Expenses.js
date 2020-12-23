import React from "react";
import Table from "react-bulma-components/lib/components/table";
import Dropdown from "react-bulma-components/lib/components/dropdown";
import { Input } from "react-bulma-components/lib/components/form";
import Button from "react-bulma-components/lib/components/button";

const categories = [
  "All",
  "Bills",
  "Food",
  "Outside Food",
  "Alcohol",
  "Leisure",
  "Others",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years = ["2020", "2021", "2022"];

export default class Expenses extends React.Component {
  state = {
    category: "",
    amount: "",
    description: "",
    month: 12,
    year: 2020,
    expenses: [],
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeCategory = (e) => {
    this.setState({ category: e }, () => this.getExpenses());
  };

  changeMonth = (e) => {
    this.setState({ month: e }, () => this.getExpenses());
  };

  changeYear = (e) => {
    this.setState({ year: e }, () => this.getExpenses());
  };

  componentWillMount() {
    let get_date = new Date();
    this.setState({
      year: get_date.getYear() + 1900,
      month: get_date.getMonth() + 1,
    });
    this.getExpenses();
  }

  submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/addExpense", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        this.setState({ category: "", amount: "", description: "" });
        this.getExpenses();
      })
      .catch((error) => {
        alert("Error con la Solicitud...");
        console.error("Error:", error);
      });
  };

  getExpenses() {
    fetch(
      `http://localhost:3000/getExpenses?category=${this.state.category}&month=${this.state.month}&year=${this.state.year}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ expenses: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  expensesTotal() {
    let total = 0;
    for (const element in this.state.expenses) {
      total = total + this.state.expenses[element].amount;
    }
    return total;
  }

  returnEmptyTable() {
    return (
      <tbody>
        <tr>
          <th>No data to show</th>
        </tr>
      </tbody>
    );
  }
  returnFilledTable(expenses, expensesTotal) {
    return (
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{expense.amount}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <th>{expense.date}</th>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <td>{expensesTotal}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    );
  }

  returnTable() {
    if (Object.keys(this.state.expenses).length !== 0)
      return this.returnFilledTable(this.state.expenses, this.expensesTotal());
    else return this.returnEmptyTable();
  }

  render() {
    const { amount, description } = this.state;
    return (
      <div className="content-body">
        <div className="content-body-form">
          <div>
            <form onSubmit={this.submitHandler}>
              <Dropdown
                id="category"
                style={{ marginRight: "10px" }}
                label="Category"
                value={this.state.category}
                onChange={this.changeCategory}
              >
                {categories.map((category, index) => (
                  <Dropdown.Item key={category} value={category}>
                    {category}
                  </Dropdown.Item>
                ))}
              </Dropdown>
              <Input
                style={{ width: "15%", marginRight: "10px" }}
                placeholder="€0.00"
                name="amount"
                value={amount}
                onChange={this.changeHandler}
              />
              <Input
                style={{ width: "40%", marginRight: "10px" }}
                placeholder="Description"
                name="description"
                value={description}
                onChange={this.changeHandler}
              />
              <Button className="button" type="Submit">
                Add
              </Button>
            </form>
          </div>
          <div style={{ right: "8%", position: "absolute" }}>
            <Dropdown value={this.state.month} onChange={this.changeMonth}>
              {months.map((month, index) => (
                <Dropdown.Item
                  key={month}
                  value={index + 1}
                  onChange={this.changeHandler}
                >
                  {month}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <Dropdown
              style={{ marginLeft: "10px" }}
              value={this.state.year}
              onChange={this.changeYear}
            >
              {years.map((year) => (
                <Dropdown.Item key={year} value={year}>
                  {year}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>
        <Table className="content-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          {this.returnTable()}
        </Table>
      </div>
    );
  }
}

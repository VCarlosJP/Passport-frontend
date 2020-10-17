import React from 'react'
import Table from 'react-bulma-components/lib/components/table';
import Dropdown  from 'react-bulma-components/lib/components/dropdown';
import {  Input } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

const categories = ['Bills', 'Food', 'Outside Food', 'Alcohol', 'Leisure', 'Others'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['2020', '2021', '2022'];

export default class Expenses extends React.Component {

state = {
  category: '',
  amount: '',
  description: '',
  month: '',
  year: '',
}

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value });
};

changeCategory = (e) => {
  this.setState({ category: e });
};

changeMonth = e => {
  this.setState({ month: e });
};

changeYear = e => {
  this.setState({ year: e });
};

componentWillMount() {
  let get_date = new Date();
  this.setState({ year: get_date.getYear()+1900, month: get_date.getMonth()+1 });
}

render(){
  const { category, amount, description, month, year } = this.state;
    return (
            <div  className="wraper">
                <div className="content-header">
                    <div className="dimelo">
                    <h1 className="title is-1 content-title">Operations</h1>
                        <ul className="myList">
                            <li>Expenses</li>
                            <li>Debts</li>
                            <li>Graphs</li>
                        </ul>
                    </div>
                    <h2 className="title is-2 testing">€1,024.00</h2>
                </div>
                <div className="content-body">
                  <div className="content-body-form">
                    <div>
                    <Dropdown id="category" style={{ marginRight: "10px" }} label="Category" value={this.state.category}  onChange={this.changeCategory}>
                        {categories.map((category)=><Dropdown.Item key={category} value={category}>{category}</Dropdown.Item>)}
                        
                      </Dropdown>
                    <Input 
                        style={{ width:"15%", marginRight: "10px" }} 
                        placeholder="€0.00"
                        name="amount"
                        value={amount}
                        onChange={this.changeHandler}
                    />
                    <Input
                        style={{ width:"40%", marginRight: "10px" }} 
                        placeholder="Description"
                        name="description"
                        value={description}
                        onChange={this.changeHandler}
                    />
                    <Button
                        className="button">
                        Add
                    </Button>
                    </div>

                <div style={{ right:"8%", position:"absolute" }}>
                <Dropdown label="Filter By Month" value={this.state.month}  onChange={this.changeMonth}>
                  {months.map((month)=><Dropdown.Item key={month} value={month} onChange={this.changeHandler}>{month}</Dropdown.Item>)}
                </Dropdown>
                <Dropdown style={{ marginLeft: "10px" }} label="Filter By Year" value={this.state.year}  onChange={this.changeYear} >
                  {years.map((year)=><Dropdown.Item key={year} value={year} >{year}</Dropdown.Item>)}
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
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>€7.50</td>
                      <td>Domino´s</td>
                      <td>Food</td>
                      <th>11/10/2020</th>
                    </tr>
                  </tbody>
                </Table>


               



                </div>
            </div>
        
    )
}

}
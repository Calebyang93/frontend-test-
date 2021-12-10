import React from 'react';
import { gridOptions, AgGrid } from 'ag-grid-community';
import './App.css';
import { Routes } from 'react-router';


function App() {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastname: '',
      emailAddress: '',
      phoneNo: '',
      gender: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  const gridOptions = {
    columndefs: [
      {field: 'firstName', rowGroup: true, minWidth: 200 },
      {field: 'lastName', rowGroup: true, minWidth: 200 },
      {field: 'email', rowGroup: true, minWidth: 200},
      {field: 'phoneno', rowGroup: true, minWidth: 200},
      {field: 'gender', rowGroup: true, minWidth: 200},
    ],
    defaultColDef: {
      flex: 1,
      sortable: true,
      filter: true,
    },
    autoGroupColumnDef: {
      minWidth: 200,
    },
    groupDefaultExpanded: 1,
  };

  function onBtForEachNode() {
    console.log('### api.forEachNode() ###');
    gridOptions.api.forEachNode(this.printNode);
  }
  
  function onBtForEachNodeAfterFilter() {
    console.log('### api.forEachNodeAfterFilter() ###');
    gridOptions.api.forEachNodeAfterFilter(this.printNode);
  }
  
  function onBtForEachNodeAfterFilterAndSort() {
    console.log('### api.forEachNodeAfterFilterAndSort() ###');
    gridOptions.api.forEachNodeAfterFilterAndSort(this.printNode);
  }
  
  function onBtForEachLeafNode() {
    console.log('### api.forEachLeafNode() ###');
    gridOptions.api.forEachLeafNode(this.printNode);
  }
  
  function printNode(node, index) {
    if (node.group) {
      console.log(index + ' -> group: ' + node.key);
    } else {
      console.log(
        index + ' -> data: ' + node.data.country + ', ' + node.data.athlete
      );
    }
  }
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new AgGrid.Grid(gridDiv, gridOptions);
  
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data.slice(0, 50)));
  });

  const AddEmployee = () => {
    var newEmployee = [];
    immutableStore.forEach(function (employee) {
      newEmployee.push({
       firstName: employee.firstName,
       lastName: employee.lastName,
       emailAddress: employee.emailAddress,
       phoneNo: employee.phoneNo,
       gender: employee.gender,
      });
    });
    immutableStore = newEmployee;
    gridApi.setRowData(immutableStore);
  };

  this.handleChange(Event) {
    this.setState({value: Event.target.value});
  }

  this.handleSubmit(Event) {
    alert('New Employee details added: ' + this.state.value);
    Event.preventDefault();
  }

  <form onSubmit={this.handleSubmit}>
  <label>First Name:
  <input type="text" min="6" max="10" value={this.state.value} onChange={this.handleChange} />
  </label>
  <label>Last Name:
  <input type="text" min="6" max="10" value={this.state.value} onChange={this.handleChange} />
  </label>
  <label>Email:
  <input type="email" value={this.state.value} onChange={this.handleChange} />
  </label>
  <label>Phone No: 
  <input type="number" max="8" value={this.state.value} onChange={this.handleChange} />
  </label>
  <select>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option selected value=""></option>
  </select>
  <input type="submit"  value="Submit"></input>
  <Button variant="outlined" href="#outlined-buttons" onClick={() => {
    fetch(form.handleSubmit, 'http://localhost/employee/edit');
  }}>Submit</Button>
  <Button variant="contained" size="medium" onClick={() => {
    fetch(form.handleClear, 'http://localhost/employee/edit'); 
  }}>Edit</Button>
  </form>
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Added New Employee' })
      };
    const response = await fetch('http://localhost/employee/add', requestOptions);
    const data = await response.json();
    this.setState({ postData: data.newEmployee });

  return (
    <div className="App">
    <gridOptions />
    <Routes>
      <Route path="add" element={<AddEmployee />} />
      <Route path="edit" element={<EditEmployee />} />
      <Route path="submit" element={<newEmployee />} />
    </Routes>
    </div>

  );
}

export default App;

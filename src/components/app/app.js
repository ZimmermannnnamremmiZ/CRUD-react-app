import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Lorem I.', salary: 1200, increase: false, id: nextId()},
        {name: 'Bibop Y.', salary: 1000, increase: true, id: nextId()},
        {name: 'Benn Z.', salary: 1400, increase: false, id: nextId()},
        {name: 'Paul A.', salary: 1600, increase: false, id: nextId()},
      ]
    }
  }



  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addEmployeer = (name, salary) => {
    this.setState(({data}) => {
      return {
        data: data.concat({
          name: name, salary: salary, increase: false, id: nextId()
        })
      }
    })
  }

  render () {
    const {data} = this.state

    return (
      <div className="app">
          <AppInfo />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>

          <EmployeesList
              data={data}
              onDelete={this.deleteItem}
              />
          <EmployeesAddForm
              onAdd={this.addEmployeer}
          />
      </div>
    );
  }
}

export default App;

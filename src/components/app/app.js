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
        {name: 'Lorem I.', salary: 1200, increase: false, rise: false, id: nextId()},
        {name: 'Bibop Y.', salary: 1000, increase: true, rise: false, id: nextId()},
        {name: 'Benn Z.', salary: 1400, increase: false, rise: false, id: nextId()},
        {name: 'Paul A.', salary: 1600, increase: false, rise: false, id: nextId()},
      ],
      term: ''
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
          name: name, salary: salary, increase: false, rise: false, id: nextId()
        })
      }
    })
  }

  onToggleProps = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searcher = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});  // term: term
  }

  render () {
    const {data, term} = this.state
    const allEmployeers =  data.length
    const allIncreased = data.filter(item => item.increase).length
    const visibleData = this.searcher(data, term)


    return (
      <div className="app">
          <AppInfo allEmployeers={allEmployeers} allIncreased={allIncreased}/>

          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter/>
          </div>

          <EmployeesList
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProps={this.onToggleProps}
              />
          <EmployeesAddForm
              onAdd={this.addEmployeer}
          />
      </div>
    );
  }
}

export default App;

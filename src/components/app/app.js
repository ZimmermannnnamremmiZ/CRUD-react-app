import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Lorem I.', salary: 1200, increase: false, id: 1},
    {name: 'Bibop Y.', salary: 1000, increase: true, id: 2},
    {name: 'Benn Z.', salary: 1400, increase: false, id: 3},
    {name: 'Paul A.', salary: 1600, increase: false, id: 4},
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
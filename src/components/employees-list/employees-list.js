import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const employer = data.map(item => {
        return (
            <EmployeesListItem />
        )
    })

    return (
        <ul className="app-list list-group">
            {employer}
        </ul>
    )
}

export default EmployeesList;
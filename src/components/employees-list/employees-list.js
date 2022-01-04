import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const employers = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {employers}
        </ul>
    )
}

export default EmployeesList;
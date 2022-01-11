import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProps, onChangeSalary}) => {

    const employers = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
                key={id}
                id={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProps={(el) => {onToggleProps(id, el.currentTarget.getAttribute('data-toggle'))}}
                onChangeSalary={onChangeSalary}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {employers}
        </ul>
    )
}

export default EmployeesList;
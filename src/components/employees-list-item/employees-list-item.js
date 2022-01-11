import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProps, increase, rise} = props;

        let itemClassNames = "list-group-item d-flex justify-content-between"

        if (increase) {
            itemClassNames += ' increase'
        }

        if (rise) {
            itemClassNames += ' like'
        }

        return (
            <li className={itemClassNames}>
                <span className="list-group-item-label" onClick={onToggleProps} data-toggle="rise">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='list-group-item__buttons d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProps}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployeesListItem;
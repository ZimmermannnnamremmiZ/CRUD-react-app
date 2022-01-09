import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: '',
            id: ''
        }
    }

    onUpdateSalary = (el) => {
        const salary = parseInt(el.target.value);
        const id = this.props.id;
        this.setState({salary, id}, () => this.props.onChangeSalary(this.state.id, this.state.salary));
    }



    render() {
        const {name, salary, onDelete, onToggleProps, increase, rise} = this.props;

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
                <input type="text" className="list-group-item-input"
                                   defaultValue={salary + "$"}
                                   onChange={this.onUpdateSalary}
                                />
                <div className='d-flex justify-content-center align-items-center'>
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
}


export default EmployeesListItem;
import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (el) => {
        const term = el.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term) // пробрасываем локальное состояние наверх
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;
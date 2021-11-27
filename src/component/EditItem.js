import React, {Component} from "react";
import uniqid from "uniqid";

class EditItem extends Component {
    constructor(props) {
        super();

        this.state = this._makeState(props);
    }

    _makeState(props) {
        const temp = {};
        for (let prop in props) {
            if (prop !== 'changeInfo') {
                temp[prop] = {
                    [prop]: props[prop],
                    id: uniqid(),
                };
            }
        }
        return temp;
    }

    onChangeInfo = (e) => {
        e.preventDefault();
        this.props.changeInfo(this.state);
    }

    onHandleChange = (e, propName) => {
        this.setState({
            [propName]: {
                [propName]: e.target.value,
                id: this.state[propName].id
            },
        });
    }

    render() {
        return (
            <form className="edit">
                { 
                    Object.keys(this.props)
                    .filter((key, i) => key !== 'changeInfo')
                    .map((key, i) => this._makeInputs(key, this.state[key][key]))
                }
                <button className="save_butt" onClick={(e) => this.onChangeInfo(e)}>Save</button>
            </form>
        );
    }

    _makeInputs(propName, value) {
        return (
            <input type="text" key={this.state[propName].id}
                value={value}
                onChange={(e) => this.onHandleChange(e, propName)} 
            />
        );
    }
}

export default EditItem;
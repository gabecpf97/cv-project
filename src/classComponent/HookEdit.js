import React, {useState, useEffect} from "react";
import uniqid from "uniqid";

const Edit = (props) => {
    const [state, setState] = useState([]);
    const [id, setId] = useState(uniqid());

    useEffect(() => {
        const states = [];
        for (let prop in props) {
            states.push({[prop]: props[prop]});
        }
        setState(states);
    }, []);

    function onChangeInfo() {

    }

    function onHandleChange(e, propName) {
        // state.forEach(state => {
        //     if (state[propName])
        //         state = {[propName]: e.target.value};
        //         // console.log(e.target.value);
        // });

        for (let i = 0; i < state.length; i++) {
            if (state[i][propName]){
                state[i] = {[propName]: e.target.value};
                console.log(state);
            }
        }
    }

    function _makeInputs(propName, value) {
        return (
            <input type="text" key={id}
                value={value}
                onChange={(e) => onHandleChange(e, propName)} 
            />
        );
    }

    return (
        <form className="edit">
            {
                state.map((field) => {
                    return Object.keys(field).filter((key, i) => key !== 'changeInfo')
                    .map((key, i) => _makeInputs(key, field[key]));
                })
            }
            <button className="save_butt" onClick = {onChangeInfo}>Save</button>
        </form>
    );
}

export default Edit;
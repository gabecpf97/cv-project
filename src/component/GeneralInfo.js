import React, {Component} from "react";

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: 'PuiFai Chau',
            phone: '919 432-7272',
            email: 'gabrielcpf2997@gmail.com',
        }
    };

    onClick = (e) => {
        
    };

    render() {
        const {name, phone, email} = this.state;

        return (
            <div className="general">
                <h2 className="myName">{name}</h2>
                <p className="myPhone">{phone}</p>
                <p className="myEmail">{email}</p>
            </div>
        );
    };
}

export default GeneralInfo;
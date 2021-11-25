import React, {Component} from "react";
import EditItem from "./EditItem";

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: 'PuiFai Chau',
            phone: '919 432-7272',
            email: 'gabrielcpf2997@gmail.com',
            isVisiable: false,
        }
    };

    onChangeInfo = (newInfo) => {
        this.setState({
            name: newInfo.name.name,
            phone: newInfo.phone.phone,
            email: newInfo.email.email,
            isVisiable: !this.state.isVisiable,
        })
    };

    showForm = () => {
        this.setState({
            isVisiable: !this.state.isVisiable,
        });
    }

    render() {
        const {name, phone, email, isVisiable} = this.state;

        return (
            <div className="general">
                <h2 className="myName">{name}</h2>
                <p className="myPhone">{phone}</p>
                <p className="myEmail">{email}</p>
                <button onClick={this.showForm}>Edit this</button>
                {isVisiable && < EditItem 
                    changeInfo = {this.onChangeInfo.bind(this)}
                    name = {name}
                    phone = {phone}
                    email = {email}
                />}
            </div>
        );
    };
}

export default GeneralInfo;     
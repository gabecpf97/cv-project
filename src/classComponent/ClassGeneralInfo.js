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
            butt_text: 'Edit this',
        }
    };

    onChangeInfo = (newInfo) => {
        this.setState({
            name: newInfo.name.name,
            phone: newInfo.phone.phone,
            email: newInfo.email.email,
            isVisiable: !this.state.isVisiable,
            butt_text: (this.state.butt_text === 'Cancel') ? 'Edit this' : 'Cancel',
        })
    };

    showForm = () => {
        this.setState({
            isVisiable: !this.state.isVisiable,
            butt_text: (this.state.butt_text === 'Cancel') ? 'Edit this' : 'Cancel',
        });
    }

    render() {
        const {name, phone, email, isVisiable, butt_text} = this.state;

        return (
            <div className="general">
                <h2 className="myName">{name}
                    <span>
                        <button className="butt" onClick={this.showForm}>{butt_text}</button>
                    </span>
                </h2>
                <div className="contact">
                    <p className="myPhone">{phone}</p>
                    <p className="myEmail">{email}</p>
                </div>
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
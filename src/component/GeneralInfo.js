import React, {useState} from "react";
import EditItem from "./EditItem";

const GeneralInfo = () => {
    const [name, setName] = useState('Your Name');
    const [phone, setPhone] = useState('Your Phone number');
    const [email, setEmail] = useState('Your Email');
    const [visiable, setVisiable] = useState(false);
    const [buttText, setButtText] = useState('Edit this');

    function showForm() {
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    const onChangeInfo = (newInfo) => {
        setName(newInfo.name.name);
        setPhone(newInfo.phone.phone);
        setEmail(newInfo.email.email);
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    return (
        <div className="general">
            <h2 className="myName">{name}
                <span>
                    <button className="butt" onClick={showForm}>{buttText}</button>
                </span>
            </h2>
            <div className="contact">
                <p className="myPhone">{phone}</p>
                <p className="myEmail">{email}</p>
            </div>
            {visiable && < EditItem 
                changeInfo = {onChangeInfo}
                name = {name}
                phone = {phone}
                email = {email}
            />}
        </div>
    )
}

export default GeneralInfo;     
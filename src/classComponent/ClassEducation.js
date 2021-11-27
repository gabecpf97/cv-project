import React, {Component} from "react";
import EditItem from "./EditItem";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            schoolName: 'University of Washington Tacoma',
            gradYear: '2020 June',
            degree: 'Bachlor Degree (BS)',
            major: 'Computer Science',
            isVisiable: false,
            butt_text: 'Edit this',
        }
    }

    onChangeInfo = (newInfo) => {
        this.setState({
            schoolName: newInfo.schoolName.schoolName,
            gradYear: newInfo.gradYear.gradYear,
            degree: newInfo.degree.degree,
            major: newInfo.major.major,
            isVisiable: !this.state.isVisiable,
            butt_text: (this.state.butt_text === 'Cancel') ? 'Edit this' : 'Cancel',
        })
    }

    showForm = () => {
        this.setState({
            isVisiable: !this.state.isVisiable,
            butt_text: (this.state.butt_text === 'Cancel') ? 'Edit this' : 'Cancel',
        });
    }

    render() {
        const {schoolName, gradYear, degree, major, isVisiable, butt_text} = this.state;

        return (
            <div className="education_div">
                <h2 className="education">Education
                    <span>
                        <button className="butt" onClick={this.showForm}>{butt_text}</button>
                    </span>
                </h2>
                <p className="schoolName">{schoolName}</p>
                <p className="gradYear">{gradYear}</p>
                <p className="degree">{degree}</p>
                <p className="major">{major}</p>
                {isVisiable && < EditItem 
                    changeInfo = {this.onChangeInfo.bind(this)}
                    schoolName = {schoolName}
                    gradYear = {gradYear}
                    degree = {degree}
                    major = {major}
                />}
            </div>
        );
    };
}

export default Education;
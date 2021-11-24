import React, {Component} from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            schoolName: 'University of Washington Tacoma',
            gradYear: '2020 June',
            degree: 'Bachlor of Science',
            marjor: 'Computer Science',
        }
    }

    render() {
        const {schoolName, gradYear, degree, major} = this.state;

        return (
            <div className="education_div">
                <h2 className="education">Education</h2>
                <p className="schoolName">{schoolName}</p>
                <p className="gradYear">{gradYear}</p>
                <p className="degree">{degree}</p>
                <p className="major">{major}</p>
            </div>
        );
    };
}

export default Education;
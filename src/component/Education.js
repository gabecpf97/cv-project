import React, {useState} from "react";
import EditItem from "../component/EditItem";

const Education = () => {
    const [schoolName, setSchoolName] = useState('School Name');
    const [gradYear, setGradYear] = useState('graduation Year');
    const [degree, setDegree] = useState('Degree');
    const [major, setMajor] = useState('Major');
    const [visiable, setVisiable] = useState(false);
    const [buttText, setButtText] = useState('Edit this');

    function showForm() {
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    const onChangeInfo = (newInfo) => {
        setSchoolName(newInfo.schoolName.schoolName);
        setGradYear(newInfo.gradYear.gradYear);
        setDegree(newInfo.degree.degree);
        setMajor(newInfo.major.major);
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    return (
        <div className="education_div">
            <h2 className="education">Education
                <span>
                    <button className="butt" onClick={showForm}>{buttText}</button>
                </span>
            </h2>
            <p className="schoolName">{schoolName}</p>
            <p className="gradYear">{gradYear}</p>
            <p className="degree">{degree}</p>
            <p className="major">{major}</p>
            {visiable && < EditItem 
                changeInfo = {onChangeInfo}
                schoolName = {schoolName}
                gradYear = {gradYear}
                degree = {degree}
                major = {major}
            />}
        </div>
    );
}   

export default Education;
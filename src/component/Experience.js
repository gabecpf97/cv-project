import React, {useState} from "react";
import EditItem from "./EditItem";

const Experience = (props) => {
    const [name, setName] = useState('Job Tilte');
    const [description, setDescription] = useState('Description');
    const [duration, setDuration] = useState('Duration');
    const [visiable, setVisiable] = useState(false);
    const [buttText, setButtText] = useState('Edit this');
    const {id, handleDelete} = props;

    const onChangeInfo = (newInfo) => {
        setName(newInfo.name.name);
        setDescription(newInfo.description.description);
        setDuration(newInfo.duration.duration);
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    function showForm() {
        setVisiable(!visiable);
        setButtText((buttText === 'Cancel') ? 'Edit this' : 'Cancel');
    }

    return (
        <div className="job">
            <p className="jobName">{name} {id}
                <span>
                    {/* <button className="butt" onClick={() => handleDelete(id)}>
                        Delete this
                    </button> */}
                </span>
                <span>
                    <button className="butt" onClick={showForm}>{buttText}</button>
                </span>
            </p>
            <p className="description">{description}</p>
            <p className="duration">{duration}</p>
            {visiable && < EditItem 
                changeInfo = {onChangeInfo}
                name = {name}
                description = {description}
                duration = {duration}
            />}
        </div>
    );
}

export default Experience;
import React, {useState, useEffect} from "react";
import Experience from "./Experience";
import uniqid from "uniqid";

const PracticalExperience = () => {
    // const [id, setId] = useState(uniqid);
    const [experiences, setExperiences] = useState([]);
    
    const handleDelete = (newId) => {
        // setExperiences(experiences => {
        //     return experiences.filter((expID) => expID !== newId);
        // });
        setExperiences(experiences.filter(e => e !== newId));
        console.log(experiences);
    }

    useEffect(() => {
        setExperiences((prevExp) => [...prevExp, uniqid()]);
    }, []);

    const onAddExperience = () => {
        setExperiences(experiences.concat(uniqid()));
    }


    return (
        <div className="practical">
            <h2  className="experience">Experience
                <span>
                    <button className="butt" onClick={() => onAddExperience()}>Add</button>
                </span>
            </h2>
                <ul>
                    {experiences.map((experience, i) => {
                        return (
                            <div className="job_div" key={i}>
                                <li>
                                    <Experience
                                        id={experience}
                                        handleDelete={handleDelete}
                                    />
                                </li>
                            </div>
                        );
                    })}
                </ul>
        </div>    
    );
}

export default PracticalExperience;
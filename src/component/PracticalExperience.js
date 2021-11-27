import React, {useState, useEffect} from "react";
import Experience from "./Experience";

const PracticalExperience = () => {
    const [count, setCount] = useState(1);    
    const [experiences, setExperiences] = useState([<Experience id={count}/>]);

    useEffect(() => {
        setCount(count + 1);
    }, []);

    function onAddExperience() {
        setCount(count + 1);
        setExperiences(experiences.concat(<Experience id={count}/>));
    }

    const removeExp = (i) => {
        setExperiences(experiences.filter((e, index) => i !== index));      
        console.log(i);
    }

    return (
        <div className="practical">
            <h2  className="experience">Experience
                <span>
                    <button className="butt" onClick={onAddExperience}>Add</button>
                </span>
            </h2>
                <ul>
                    {experiences.map((experience, i) => {
                        return (
                            <div className="job_div" key={i}>{i}
                                <li>{experience}</li>
                                <button onClick={() => removeExp(i)}>remove this</button>
                            </div>
                        );
                    })}
                </ul>
        </div>    
    );
}

export default PracticalExperience;
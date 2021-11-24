import React, {Component} from "react";
import uniqid from "uniqid";

class PracticalExperience extends Component {
    constructor() {
        super();

        this.state = {
            experiences: [{
                name: 'Peer Facilitator',
                description: 'Each week organize and explain course materials that helps student achieve more in the course',
                duration: 'Sep 2018 - Dec 2018',
                id: uniqid(),
            }],
        }
    }

    render() {
        return (
            <div className="practical">
                <h2  className="experience">Experience</h2>
                <ul>
                    {this.state.experiences.map((experience) => {
                        const {name, description, duration, id} = experience;
                        return (
                            <li className="job" key={id}>
                                <p className="jobName">{name}</p>
                                <p className="description">{description}</p>
                                <p className="duration">{duration}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

export default PracticalExperience;
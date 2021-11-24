import React, {Component} from "react";
import uniqid from "uniqid";
import EditItem from "./EditItem";

class PracticalExperience extends Component {
    constructor() {
        super();

        this.state = {
            experiences: [{
                name: 'Peer Facilitator',
                description: 'Each week organize and explain course materials that helps student achieve more in the course',
                duration: 'Sep 2018 - Dec 2018',
                exp_id: uniqid(),
            }],
        }
    }

    onChangeInfo = (newInfo) => {
        console.log(newInfo);
        this.setState({
            experiences: [{
                name: newInfo.name.name,
                description: newInfo.description.description,
                duration: newInfo.duration.duration,
                exp_id: this.state.experiences[0].exp_id,
            }],
        });
    }

    render() {
        return (
            <div className="practical">
                <h2  className="experience">Experience</h2>
                <ul>
                    {this.state.experiences.map((experience) => {
                        const {name, description, duration, exp_id} = experience;
                        return (
                            <li className="job" key={exp_id}>
                                <p className="jobName">{name}</p>
                                <p className="description">{description}</p>
                                <p className="duration">{duration}</p>
                                < EditItem
                                    changeInfo = {this.onChangeInfo.bind(this)}
                                    name = {name}
                                    description = {description}
                                    duration = {duration}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

export default PracticalExperience;
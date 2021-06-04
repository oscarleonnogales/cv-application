import React, { Component } from 'react';
import School from './School';
import Job from './Job';
import PersonalDetails from './PersonalDetails';

export default class Resume extends Component {
	render() {
		const { personalDetails, schools, jobs } = this.props;
		return (
			<div id="cv">
				<PersonalDetails personalDetails={personalDetails}></PersonalDetails>

				{personalDetails.summary && <h4 className="cv-header">SUMMARY</h4>}
				{personalDetails.summary && <p className="summary-paragraph">{`${personalDetails.summary}`}</p>}

				{schools.length !== 0 && <h4 className="cv-header">EDUCATION</h4>}
				{schools.map((school) => {
					return <School school={school} key={school.id}></School>;
				})}

				{jobs.length !== 0 && <h4 className="cv-header">WORK EXPERIENCE</h4>}
				{jobs.map((job) => {
					return <Job job={job} key={job.id}></Job>;
				})}
			</div>
		);
	}
}

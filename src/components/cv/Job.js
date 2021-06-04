import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export default function Job({ job }) {
	return (
		<div key={job.id} className="cv-job-container">
			<div className="job-summary">
				<div>
					<span className="company-name">{job.company}</span>
					<span className="job-location">{`, ${job.city}, ${job.state?.toUpperCase()}`}</span>
				</div>
				{job.startDate && job.endDate && (
					<div>{`${dayjs.utc(job.startDate).format('MMMM YYYY')} - ${dayjs.utc(job.endDate).format('MMMM YYYY')}`}</div>
				)}
			</div>
			<div className="position">{job.position}</div>
			<ul className="bullet-points">
				{job.details[0] && <li>{`${job.details[0]}`}</li>}
				{job.details[1] && <li>{`${job.details[1]}`}</li>}
				{job.details[2] && <li>{`${job.details[2]}`}</li>}
			</ul>
		</div>
	);
}

import React, { useContext } from 'react';
import { ResumeContext } from '../../App';
import FormInput from '../FormInput';

export default function WorkExperienceForm({ handleWorkChanges, removeJob }) {
	const { jobs } = useContext(ResumeContext);

	function handleBulletPointChanges(jobId, bulletPoint, value) {
		const details = jobs.find((job) => job.id === jobId).details;
		details[bulletPoint] = value;
		handleWorkChanges(jobId, 'details', details);
	}

	return jobs.map((job) => (
		<div className="work-form-container" key={job.id}>
			<h4 className="form-container-title">Job Details</h4>
			<FormInput
				title="Position"
				type="text"
				forDescription="position"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'position', e.target.value)}
				inputValue={job.position}
			/>

			<FormInput
				title="Company"
				type="text"
				forDescription="company"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'company', e.target.value)}
				inputValue={job.company}
			/>

			<FormInput
				title="City"
				type="City"
				forDescription="city"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'city', e.target.value)}
				inputValue={job.city}
			/>

			<FormInput
				title="State"
				type="text"
				forDescription="state"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'state', e.target.value)}
				inputValue={job.state}
			/>

			<FormInput
				title="Start Date"
				type="date"
				forDescription="startDate"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'startDate', e.target.value)}
				inputValue={job.startDate}
			/>

			<FormInput
				title="End Date"
				type="date"
				forDescription="endDate"
				onChangeFunction={(e) => handleWorkChanges(job.id, 'endDate', e.target.value)}
				inputValue={job.endDate}
			/>

			<FormInput
				title="Detail / Responsibility"
				type="text"
				forDescription="bullet-point-1"
				onChangeFunction={(e) => handleBulletPointChanges(job.id, 0, e.target.value)}
				inputValue={job.details[0]}
			/>

			<FormInput
				title="Detail / Responsibility"
				type="text"
				forDescription="bullet-point-2"
				onChangeFunction={(e) => handleBulletPointChanges(job.id, 1, e.target.value)}
				inputValue={job.details[1]}
			/>

			<FormInput
				title="Detail / Responsibility"
				type="text"
				forDescription="bullet-point-3"
				onChangeFunction={(e) => handleBulletPointChanges(job.id, 2, e.target.value)}
				inputValue={job.details[2]}
			/>

			<button className="btn-delete" onClick={() => removeJob(job.id)}>
				&times;
			</button>
		</div>
	));
}

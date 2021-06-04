import React, { useContext } from 'react';
import { ResumeContext } from '../../App';
import FormInput from '../FormInput';

export default function SchoolDetailsForm({ handleEducationChanges, removeSchool }) {
	const { schools } = useContext(ResumeContext);
	return (
		<>
			{schools.map((school) => (
				<div className="school-form-container" key={school.id}>
					<h4 className="form-container-title">School Information</h4>
					<FormInput
						title="School Name"
						type="text"
						forDescription="name"
						onChangeFunction={(e) => handleEducationChanges(school.id, e)}
						inputValue={school.name}
					/>

					<FormInput
						title="City"
						type="text"
						forDescription="city"
						onChangeFunction={(e) => handleEducationChanges(school.id, e)}
						inputValue={school.city}
					/>

					<FormInput
						title="State"
						type="text"
						forDescription="state"
						onChangeFunction={(e) => handleEducationChanges(school.id, e)}
						inputValue={school.state}
					/>

					<FormInput
						title="Diploma Earned"
						type="text"
						forDescription="diploma"
						onChangeFunction={(e) => handleEducationChanges(school.id, e)}
						inputValue={school.diploma}
					/>

					<FormInput
						title="Graduation Date"
						type="date"
						forDescription="graduationDate"
						onChangeFunction={(e) => handleEducationChanges(school.id, e)}
						inputValue={school.graduationDate}
					/>

					<button className="btn-delete" onClick={() => removeSchool(school.id)}>
						&times;
					</button>
				</div>
			))}
		</>
	);
}

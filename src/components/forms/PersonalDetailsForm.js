import React, { useContext } from 'react';
import { ResumeContext } from '../../App';
import FormInput from '../FormInput';

export default function PersonalDetailsForm() {
	const { personalDetails, changePersonalDetails } = useContext(ResumeContext);

	return (
		<div className="personal-details-form-container">
			<h4 className="form-container-title">Personal Information</h4>
			<FormInput
				title="First Name"
				type="text"
				forDescription="firstName"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.firstName}
			/>

			<FormInput
				title="Last Name"
				type="text"
				forDescription="lastName"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.lastName}
			/>

			<FormInput
				title="Email"
				type="email"
				forDescription="email"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.email}
			/>

			<FormInput
				title="Phone Number"
				type="number"
				forDescription="phoneNumber"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.phoneNumber}
			/>

			<FormInput
				title="City"
				type="text"
				forDescription="city"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.city}
			/>

			<FormInput
				title="State"
				type="text"
				forDescription="state"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.state}
			/>

			<FormInput
				title="LinkedIn URL"
				type="text"
				forDescription="linkedinURL"
				onChangeFunction={changePersonalDetails}
				inputValue={personalDetails.linkedinURL}
			/>

			<div className="form-textarea">
				<textarea
					className="form-input__input"
					type="text"
					name="summary"
					value={personalDetails.summary}
					placeholder=" "
					onChange={changePersonalDetails}
				/>
				<label className="form-input__label" htmlFor="summary">
					Summary
				</label>
			</div>
		</div>
	);
}

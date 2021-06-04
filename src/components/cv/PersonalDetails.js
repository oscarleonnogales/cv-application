import React from 'react';

export default function PersonalDetails({ personalDetails }) {
	const formatPhoneNumber = (n) => {
		if (n === null || n === undefined) return null;
		return `(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6, 10)}`;
	};

	return (
		<div className="personal-details-container">
			<h1 className="name">{`${personalDetails.firstName} ${personalDetails.lastName}`}</h1>

			<h3 className="contact-info">
				{personalDetails.city && (
					<span className="city">{`${personalDetails.city}, ${personalDetails.state?.toUpperCase()}`}</span>
				)}
				{personalDetails.email && <span className="email">{` - ${personalDetails.email}`}</span>}
			</h3>

			<h3 className="contact-info">
				{personalDetails.phoneNumber && formatPhoneNumber(personalDetails.phoneNumber)}
				{personalDetails.linkedinURL && (
					<span>
						{' '}
						- <a href={personalDetails.linkedinURL}>{personalDetails.linkedinURL}</a>
					</span>
				)}
			</h3>
		</div>
	);
}

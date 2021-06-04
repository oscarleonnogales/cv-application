import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export default function School({ school }) {
	return (
		<div key={school.id} className="cv-school-container">
			<div className="cv-school-description">
				{school.name && (
					<div>
						<span className="cv-school-name">{school.name}</span>
						{school.city && (
							<span className="cv-school-city">{`, ${school.city}, ${school.state?.toUpperCase()}`}</span>
						)}
					</div>
				)}
				{school.graduationDate && <div>{dayjs.utc(school.graduationDate).format('MMMM YYYY')}</div>}
			</div>
			<div>{school.diploma}</div>
		</div>
	);
}

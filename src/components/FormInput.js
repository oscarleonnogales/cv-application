import React from 'react';

export default function FormInput(props) {
	const { title, forDescription, inputValue, type, onChangeFunction } = props;

	return (
		<div className="form-input">
			<input
				className="form-input__input"
				type={type}
				name={forDescription}
				onChange={onChangeFunction}
				value={inputValue}
				placeholder=" "
			/>
			<label htmlFor={forDescription} className="form-input__label">
				{title}
			</label>
		</div>
	);
}

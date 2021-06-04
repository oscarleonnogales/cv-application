import React, { useState, useEffect, useRef } from 'react';
import Resume from './components/cv/Resume';
import PersonalDetailsForm from './components/forms/PersonalDetailsForm';
import SchoolDetailsForm from './components/forms/SchoolDetailsForm';
import WorkExperienceForm from './components/forms/WorkExperienceForm';
import uuid from '../node_modules/uuid/dist/v4';
import { useReactToPrint } from 'react-to-print';
import './styles/App.css';
import './styles/form.css';
import './styles/formInput.css';

export const ResumeContext = React.createContext();
const LOCAL_STORAGE_PERSONAL = 'cv-app.personal-information';
const LOCAL_STORAGE_SCHOOLS = 'cv-app.schools';
const LOCAL_STORAGE_JOBS = 'cv-app.jobs';

function App() {
	const [personalDetails, setPersonalDetails] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		city: '',
		state: '',
		email: '',
		linkedinURL: '',
		summary: '',
	});

	const [schools, setSchools] = useState([]);
	const [jobs, setJobs] = useState([]);

	const componentRef = useRef();

	useEffect(() => {
		const personalInfoJSON = localStorage.getItem(LOCAL_STORAGE_PERSONAL);
		const schoolsJSON = localStorage.getItem(LOCAL_STORAGE_SCHOOLS);
		const jobsJSON = localStorage.getItem(LOCAL_STORAGE_JOBS);
		if (personalInfoJSON !== null) setPersonalDetails(JSON.parse(personalInfoJSON));
		if (schoolsJSON !== null) setSchools(JSON.parse(schoolsJSON));
		if (jobsJSON !== null) setJobs(JSON.parse(jobsJSON));
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_PERSONAL, JSON.stringify(personalDetails));
	}, [personalDetails]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_SCHOOLS, JSON.stringify(schools));
	}, [schools]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_JOBS, JSON.stringify(jobs));
	}, [jobs]);

	const changePersonalDetails = (e) => {
		setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
	};

	const handleEducationChanges = (schoolId, e) => {
		const schoolsCopy = [...schools];
		schoolsCopy.find((school) => school.id === schoolId)[e.target.name] = e.target.value;
		setSchools(schoolsCopy);
	};

	const handleWorkChanges = (jobId, key, value) => {
		const jobsCopy = [...jobs];
		jobsCopy.find((job) => job.id === jobId)[key] = value;
		setJobs(jobsCopy);
	};

	const addSchool = () => {
		const newSchool = {
			id: uuid(),
			name: '',
			city: '',
			state: '',
			diploma: '',
			graduationDate: '',
		};
		setSchools([...schools, newSchool]);
	};

	const addJob = () => {
		const newJob = {
			id: uuid(),
			position: '',
			company: '',
			city: '',
			state: '',
			details: [],
			startDate: '',
			endDate: '',
		};
		setJobs([...jobs, newJob]);
	};

	const removeSchool = (id) => {
		setSchools([...schools.filter((school) => school.id !== id)]);
	};

	const removeJob = (id) => {
		setJobs([...jobs.filter((job) => job.id !== id)]);
	};

	const handlePrint = useReactToPrint({ content: () => componentRef.current });

	const clearEverything = () => {
		setPersonalDetails({
			firstName: '',
			lastName: '',
			phoneNumber: '',
			city: '',
			state: '',
			email: '',
			linkedinURL: '',
			summary: '',
		});
		setSchools([]);
		setJobs([]);
	};

	const loadExample = () => {
		setPersonalDetails({
			firstName: 'John',
			lastName: 'Doe',
			phoneNumber: '1238675309',
			city: 'san diego',
			state: 'ca',
			email: 'johndoe@email.com',
			linkedinURL: 'linkedin.com/johndoe',
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Elementum nisi quis eleifend quam adipiscing vitae. Egestas tellus rutrum tellus pellentesque. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Viverra adipiscing at in tellus integer. Gravida in fermentum et sollicitudin ac. Euismod lacinia at quis risus sed vulputate.',
		});
		setJobs([
			{
				id: uuid(),
				position: 'Retail Associate',
				company: 'Retail Store',
				city: 'san diego',
				state: 'ca',
				details: [
					'Modified and enhanced existing algorithms used to solve non-differentiable optimization problems, achieving an increase in accuracy while reducing runtime.',
					'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Mauris commodo quis imperdiet massa tincidunt nunc.',
					'Eget magna fermentum iaculis eu non. Erat imperdiet sed euismod nisi porta lorem mollis. Felis imperdiet proin fermentum leo vel.',
				],
				startDate: new Date(),
				endDate: new Date(),
			},
			{
				id: uuid(),
				position: 'Crew Member',
				company: 'Family Restaurant',
				city: 'san diego',
				state: 'ca',
				details: [
					'Modified and enhanced existing algorithms used to solve non-differentiable optimization problems, achieving an increase in accuracy while reducing runtime.',
					'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Mauris commodo quis imperdiet massa tincidunt nunc.',
					'Eget magna fermentum iaculis eu non. Erat imperdiet sed euismod nisi porta lorem mollis. Felis imperdiet proin fermentum leo vel.',
				],
				startDate: new Date(),
				endDate: new Date(),
			},
			{
				id: uuid(),
				position: 'Mentor',
				company: 'Some School',
				city: 'san diego',
				state: 'ca',
				details: [
					'Modified and enhanced existing algorithms used to solve non-differentiable optimization problems, achieving an increase in accuracy while reducing runtime.',
					'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Mauris commodo quis imperdiet massa tincidunt nunc.',
					'Eget magna fermentum iaculis eu non. Erat imperdiet sed euismod nisi porta lorem mollis. Felis imperdiet proin fermentum leo vel.',
				],

				startDate: new Date(),
				endDate: new Date(),
			},
		]);
		setSchools([
			{
				id: uuid(),
				name: 'Stanford University',
				city: 'palo alto',
				state: 'ca',
				diploma: 'Bachelor of Science in Computer Science',
				graduationDate: new Date(),
			},
		]);
	};

	const resumeInformation = {
		personalDetails,
		schools,
		jobs,
		changePersonalDetails,
	};

	return (
		<ResumeContext.Provider value={resumeInformation}>
			<div className="main-container">
				<div className="form-container">
					<PersonalDetailsForm changePersonalDetails={changePersonalDetails} />

					<SchoolDetailsForm handleEducationChanges={handleEducationChanges} removeSchool={removeSchool} />
					<div className="btn-container">
						<button className="btn btn-add" onClick={addSchool}>
							Add School
						</button>
					</div>

					<WorkExperienceForm handleWorkChanges={handleWorkChanges} removeJob={removeJob} />
					<div className="btn-container">
						<button className="btn btn-add" onClick={addJob}>
							Add Job
						</button>
					</div>
					<div className="btn-container generate-and-clear-btn-container">
						<button className="btn btn-generate" onClick={handlePrint}>
							Generate PDF
						</button>
						<button className="btn clear-all-btn" onClick={clearEverything}>
							Clear All
						</button>
						<button className="btn btn-load-example" onClick={loadExample}>
							Load Example
						</button>
					</div>
				</div>
				<div className="cv-container">
					<Resume ref={componentRef} personalDetails={personalDetails} schools={schools} jobs={jobs} />
				</div>
			</div>
		</ResumeContext.Provider>
	);
}

export default App;

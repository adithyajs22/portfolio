import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import './Achievements.css'; 

const certifications = [
    {
		name: 'Google Prompting Essentials Specialization',
		issuer: 'Coursera /Google',
		issueDate: 'Sep, 2026',
		credentialId: 'ZQ0RCLC1GRDK',
		url: 'https://www.coursera.org/account/accomplishments/specialization/ZQ0RCLC1GRDK'
	},
	{
		name: 'Start Writing Prompts like a Pro',
		issuer: 'Coursera / Google',
		issueDate: 'Aug, 2026',
		credentialId: 'RE4D2MM540RN',
		url: 'https://www.coursera.org/account/accomplishments/verify/RE4D2MM540RN'
	},
	{
		name: 'Design Prompts for Everyday Work Tasks',
		issuer: 'Coursera /Google',
		issueDate: 'Sep, 2026',
		credentialId: 'C2BR4ODCQJAG',
		url: 'https://www.coursera.org/account/accomplishments/verify/C2BR4ODCQJAG'
	},
    {
		name: 'Speed Up Data Analysis and Presentation Building',
		issuer: 'Coursera /Google',
		issueDate: 'Sep, 2026',
		credentialId: 'PNBTFHI9H7F4',
		url: 'https://www.coursera.org/account/accomplishments/verify/PNBTFHI9H7F4'
	},
    {
		name: 'Use AI as a Creative or Expert Partner',
		issuer: 'Coursera /Google',
		issueDate: 'Sep, 2026',
		credentialId: '3BML6MCS84WQ',
		url: 'https://www.coursera.org/account/accomplishments/verify/3BML6MCS84WQ'
	},
{
		name: 'Supervised Machine Learning: Regression and Classification',
		issuer: 'Stanford /DeepLearning.AI',
		issueDate: 'Sep, 2026',
		credentialId: 'AHQTBUCBR8O7',
		url: 'https://www.coursera.org/account/accomplishments/verify/AHQTBUCBR8O7'
	},
];

const Achievements = () => {
	return (
		<section id="achievements" className="achievements-section">
			<h2>Certifications</h2>

			<div className="certifications">
				{certifications.map((c, i) => (
					<div className="certification" key={i}>
						<div className="certification-name">
							<strong>{c.name}</strong> – Issued by <strong>{c.issuer}</strong>
						</div>
						<div className="cert-meta">
							<strong>Issue Date:</strong> {c.issueDate}
							{c.credentialId && (
								<>
									<span> | </span>
									<strong>Credential ID:</strong> {c.credentialId}
								</>
							)}
						</div>
						<a className="cert-link" href={c.url} target="_blank" rel="noreferrer">View Verified Certificate</a>
					</div>
				))}
			</div>
		</section>
	)
}

export default Achievements;


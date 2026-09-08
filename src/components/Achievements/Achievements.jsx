import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import './Achievements.css'; 

const certifications = [
	{
		name: 'Machine Learning',
		issuer: 'Coursera / Stanford University',
		issueDate: 'Mar, 2023',
		credentialId: 'ABC12345',
		url: 'https://www.coursera.org/account/accomplishments/certificate/EXAMPLE'
	},
	{
		name: 'Deep Learning Specialization',
		issuer: 'Coursera / deeplearning.ai',
		issueDate: 'May, 2024',
		credentialId: '',
		url: 'https://www.coursera.org/account/accomplishments/specialization/EXAMPLE'
	}
];

const Achievements = () => {
	return (
		<section id="achievements" className="achievements-section">
			<h2>Achievements</h2>

			<div className="certifications">
				<h3>Certifications</h3>
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


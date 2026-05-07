import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "ASP.NET Core",
  "MVC",
  "C#",
  "Entity Framework",
  "ADO.NET",
  "RESTful APIs",
  "React",
  "Vue.js",
  "AngularJS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "jQuery",
  "SQL Server",
  "PostgreSQL",
  "Oracle",
  "Postman"
];

const labelsSecond = [
  "Azure DevOps",
  "CI/CD Pipelines",
  "Docker",
  "Git",
  "Bitbucket",
  "TFS",
  "Azure Service Bus",
  "SignalR",
  "Hangfire",
  "Microsoft Azure",
  "Linux",
  "IIS",
  "Automation Anywhere",
  "Selenium",
  "Jira"
];

const labelsThird = [
  "OpenAI API",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "Hugging Face",
  "Groq API",
  "Qdrant",
  "Vector Databases",
  "RAG Systems",
  "Prompt Engineering",
  "Python",
  "Pandas",
  "Streamlit"
];

function Expertise() {
    return (
         <div id="expertise">
    <div className="skills-wrapper" >

  <div className="skill-card glass">
    <FontAwesomeIcon icon={faReact} size="3x" className="skill-icon" />
    <h3>Enterprise Full-Stack Development</h3>

    <p>
      Experienced Software Engineer specializing in scalable enterprise applications using
      ASP.NET Core, MVC, and modern frontend frameworks. Strong focus on clean architecture,
      RESTful APIs, and high-performance systems.
    </p>

    <div className="chip-group">
      <span className="chip-title">Tech Stack</span>
      {labelsFirst.map((label, index) => (
        <span key={index} className="chip">{label}</span>
      ))}
    </div>
  </div>

  <div className="skill-card glass">
    <FontAwesomeIcon icon={faDocker} size="3x" className="skill-icon" />
    <h3>Cloud, DevOps & Automation</h3>

    <p>
      Experienced in CI/CD pipelines, Azure DevOps, Docker containerization, and system
      automation. Strong background in delivering production-grade systems in agile environments.
    </p>

    <div className="chip-group">
      <span className="chip-title">Tech Stack</span>
      {labelsSecond.map((label, index) => (
        <span key={index} className="chip">{label}</span>
      ))}
    </div>
  </div>

  <div className="skill-card glass">
    <FontAwesomeIcon icon={faPython} size="3x" className="skill-icon" />
    <h3>AI Engineering & Intelligent Systems</h3>

    <p>
      Building modern AI-powered systems using LLMs, vector databases, and RAG pipelines.
      Strong foundation in Python, data processing, and AI integration workflows.
    </p>

    <div className="chip-group">
      <span className="chip-title">Tech Stack</span>
      {labelsThird.map((label, index) => (
        <span key={index} className="chip">{label}</span>
      ))}
    </div>
  </div>

</div>
</div>
    );
}

export default Expertise;
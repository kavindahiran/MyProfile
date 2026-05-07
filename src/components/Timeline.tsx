import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Feb 2026 - Present"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Sumathi Holdings, Colombo (Hybrid)</h4>
    <p>
      Leading enterprise application development and system enhancements in a manufacturing-oriented environment.
      Working on MES (Manufacturing Execution System) focused on machine planning, job scheduling, and production optimization.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sep 2024 - Feb 2026"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Virtusa Sri Lanka, Colombo (Hybrid)</h4>
    <p>
      Worked on enterprise-grade systems using ASP.NET Core and Azure technologies.
      Involved in backend optimization, production issue troubleshooting, and mentoring junior developers.
      Contributed to scalable cloud-based solutions using Azure Functions and DevOps pipelines.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan 2024 - Sep 2024"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Twire (Pvt) Ltd, Colombo</h4>
    <p>
      Developed a dynamic MES-based project management system for machine planning and job scheduling.
      Built full-stack solutions using ASP.NET Core 6.0 with React frontend.
      Implemented CI/CD pipelines using Azure DevOps and worked with optimization algorithms (Google OR-Tools).
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jul 2020 - Jan 2024"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">hSenid Business Solutions, Colombo</h4>
    <p>
      Designed and developed enterprise HR systems including recruitment, employee management,
      attendance, and probation modules for large-scale clients.
      Worked with ASP.NET MVC, N-Tier architecture, ADO.NET, and Entity Framework,
      ensuring scalable and maintainable enterprise solutions.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Dec 2019 - Jun 2020"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Intern Automation Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Hayleys Advantis, Colombo</h4>
    <p>
      Worked on automation of SaaS-based ERP systems using Selenium and Automation Anywhere.
      Developed supporting ASP.NET MVC tools to enhance automation workflows and system efficiency.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
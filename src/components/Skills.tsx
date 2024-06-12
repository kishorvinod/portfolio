import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills"  className="section-container skills-section">
      <h2>SKILLS</h2>
      <table className="skills-table">
        <tbody>
          <tr>
            <td><strong>Technical Skills</strong></td>
            <td>
              <ul>
                <li>Mastery of Microsoft Office (Word, Excel, PowerPoint) and Google Suite (Docs, Sheets, Slides).</li>
                <li>Comfortable working in both Microsoft Windows 10 and Mac OS X.</li>
                <li>Java, C++, PHP, Python, React, Next.js, Node.js</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Communication Skills</strong></td>
            <td>
              <ul>
                <li>Excellent communication skills with a focus on team-building and academics.</li>
                <li>Communication (written & verbal)</li>
                <li>Teaching & Curriculum Development</li>
                <li>Active Listening & Empathy</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Organizational Skills</strong></td>
            <td>
              <ul>
                <li>Outstanding organizational, multitasking, and problem-solving abilities.</li>
                <li>Time Management & Organization</li>
                <li>Adaptability & Continuous Learning</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Interpersonal Skills</strong></td>
            <td>
              <ul>
                <li>Collaboration & Teamwork</li>
                <li>Mentorship & Guidance</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Analytical Skills</strong></td>
            <td>
              <ul>
                <li>Critical Thinking & Problem-Solving</li>
                <li>Research Methodology and Statistics</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;

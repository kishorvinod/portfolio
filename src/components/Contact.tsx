import React from 'react';

const Contact: React.FC = () => {
  const handleMailTo = () => {
    window.location.href = 'mailto:kishorvinod245@gmail.com';
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="section-container contact-section">
      <h2>CONTACT ME</h2>
      <table>
        <tbody>
          <tr>
            <td>Email:</td>
            <td>kishorvinod245@gmail.com</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>+918921229019</td>
          </tr>
          <tr>
            <td>Alternate Phone:</td>
            <td>+918157883631</td>
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        <button className="email-button" onClick={handleMailTo}>Email Me</button>
        <button className="resume-button" onClick={handleDownloadResume}>Download Resume</button>
      </div>
    </section>
  );
};

export default Contact;

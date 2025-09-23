import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              During my first internship at CodSoft, I worked on developing and maintaining Python-based applications. I collaborated with a team of developers to design efficient algorithms and implement new features. My responsibilities included writing clean, maintainable code, debugging issues, and optimizing performance. I gained hands-on experience with libraries such as Flask and Django, and worked on integrating third-party APIs. This internship helped me enhance my problem-solving skills and provided valuable insights into software development best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>BharatIntern</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              As a Web Developer Intern at BharatIntern, I contributed to the development of responsive and user-friendly web applications. I worked closely with senior developers to implement front-end designs using HTML, CSS, and JavaScript. My tasks included creating interactive features, optimizing website performance, and ensuring cross-browser compatibility. I also gained experience with version control systems like Git and collaborated in an Agile development environment. This internship provided me with practical skills in web development and a deeper understanding of the full development lifecycle.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer</h4>
                <h5>Zidio Development Company</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to the design, development, and deployment of scalable web applications using modern technologies such as JavaScript, React, and Node.js. Collaborated with cross-functional teams to gather requirements, debug issues, and implement new features. Focused on optimizing application performance and enhancing user experience through responsive design and clean code practices. Participated in Agile development cycles, code reviews, and version control using Git. Gained valuable experience in full-stack development and real-world software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

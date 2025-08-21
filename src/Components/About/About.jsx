import "./About.css";
import profile from "../../assets/airport1.jpg"; // your image

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="image-wrapper">
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Muthamizh Kumaran</span>, a passionate Full Stack Developer
          with expertise in Java, Spring Boot, React, and modern web technologies.
        </p>
        <p>
          I enjoy solving complex problems, building scalable applications,
          and continuously learning new skills. I also like contributing to
          impactful projects that make people's lives easier.
        </p>
      </div>
    </div>
  );
};

export default About;


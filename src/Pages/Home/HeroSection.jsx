export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bairi Vishnu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Science</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I am actively looking for a Job opprotunity of Software Engineer, Front-End Developer, Back-End Developer, Fullstack Developer and Software Developoment Roles.
          </p>
        </div>
        <a href="/Vishnu_Resume.pdf" download="Resume.pdf">
        <button className="btn-resume">Download Resume</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/animoji.jpg" alt="Hero Section" height="30%" width="80%"/>
      </div>
    </section>
  );
}

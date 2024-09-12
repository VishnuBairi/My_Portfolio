import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <div className="skills">
          <ul>
            <li>C Programming</li>
            <li>Java</li>
            <li>Python</li>
            <li>DBMS</li>
            <li>SQL</li>
            <li>Data Structures</li>
            <li>Javascript</li>
            <li>Spring Boot</li>
            <li>Rest API</li>
            <li>HTML</li>
            <li>Css</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MySql</li>
            <li>MongoDB</li>            
            <li>Git</li>
            <li>API-Testing</li>
            <li>JWT</li>

          </ul>
    </div>
    </div>
    <div className="my-expertise">
      <h2 className="skills--section--heading">My Expertise</h2>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

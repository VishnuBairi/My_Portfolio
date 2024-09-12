export default function ContactMe() {
  
  return (
    <section id="Contact" className="contact--section">
      <div className="contact-area">
        <div>
          <h2>Contact Me</h2>
        </div>
        <form className="contact--form--container" >
          <div className="container">
            <h4>Gmail :</h4><p>byrivishnu0098@gmail.com</p>
            <h4>Linkedin :</h4><a className="contact-type" href="https://www.linkedin.com/in/vishnu-bairi-552771215"  target="_blank" rel="noopener noreferrer">Vishnu on Linkedin</a>
            <h4>GitHub :</h4><a className="contact-type" href="https://www.github.com/VishnuBairi"  target="_blank" rel="noopener noreferrer">Catch me on Github</a>
          </div>
        </form>
      </div>
    </section>
  );
}

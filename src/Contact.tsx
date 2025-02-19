import "./assets/css/contact.css";
import rightImg from "./assets/img/right_img.png";

function Contact() {
  const formkey = import.meta.env.VITE_WEB3FORM_KEY;
  return (
    <div className="contact-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-left-title">
          <h2>Get in touch</h2>
          <hr />
        </div>
        <input type="hidden" name="access_key" value={formkey}></input>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
        ></input>
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-inputs"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-right">
        <img src={rightImg} alt="" />
      </div>
    </div>
  );
}

export default Contact;

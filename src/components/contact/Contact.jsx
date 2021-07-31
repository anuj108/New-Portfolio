import "./contact.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function contact() {
  return (
    <div className="Contact" id="contact">
      <div className="wrapper">
        <h1>Send a Message</h1>
        <form action="#">
          <div className="dbl-field">
            <div className="field">
              <AccountBoxIcon classname="icon" />
              <input type="text" placeholder="ENTER YOUR NAME" />
            </div>
            <div className="field">
              <AccountBoxIcon classname="icon" />
              <input type="text" placeholder="ENTER YOUR EMAIL" />
            </div>
          </div>
          <div className="message">
            <textarea placeholder="Write your message"></textarea>
          </div>
          <div className="button-area">
            <button type="submit">SEND</button>
            <span>Sending the message...</span>
          </div>
        </form>
        <div className="bottom">
          <a href="https://www.github.com/anuj108" className="github">
            <GitHubIcon fontSize="large"
            color="disabled" />
          </a>
          <a href="https://www.instagram.com/anuj1_0_8/" className="instagram">
            <InstagramIcon fontSize="large" color="disabled"/>
          </a>
          <a href="https://www.linkedin.com/in/anuj-s-7840711a0/" className="linkedin">
            <LinkedInIcon fontSize="large"
            color="disabled" />
          </a>
        </div>
      </div>
      <div className="love">
        made with peace by ANUJ
      </div>
    </div>
  );
}

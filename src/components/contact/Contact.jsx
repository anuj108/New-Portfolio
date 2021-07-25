import "./contact.css"
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function contact() {
    return (
        <div className="contact" id="contact">
        <div className="wrapper">
            <h1>Send a Message</h1>
            <form action="#">
            <div className="dbl-field">
                <div className="field">
                <AccountBoxIcon classname="icon"/>
                    <input type="text" placeholder="ENTER YOUR NAME"  />
                   
                </div>
                <div className="field">
                <AccountBoxIcon classname="icon"/>
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
        </div>
        </div>
    )
}

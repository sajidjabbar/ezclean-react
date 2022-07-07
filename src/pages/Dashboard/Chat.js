import React from "react";
import { Link } from "react-router-dom";
import chat from "../../assets/css/chat.css";

const Chat = () => {
  return (
    <>
      {/* Chat section  */}
      <section className="chat-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="confirmation">
                <h3>Confirmation and Chat</h3>
                <p>Our three core values match our one mission, delivering the best cleaning experience, trained and trusted cleaners, and environmentally friend</p>

                <div className="lets-talk">
                    <h4>John Martin</h4>
                    <Link to="/">Lets talk...</Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* End of Chat section  */}
    </>
  );
};

export default Chat;

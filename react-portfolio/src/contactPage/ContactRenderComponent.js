import React from "react";

class ContactRenderComponent extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact_title">
          <p>Contact Me</p>
          <hr />
        </div>
        <div className="contact_flex">
          <div className="contact_left">
            <p className="touch">Get in touch </p>
            <p>Email: name@domain.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              enim quo mollitia neque beatae quasi! Deleniti, quam dolores. Sit
              velit explicabo quasi esse, fuga rerum.
            </p>
          </div>
          <div className="contact_right">
            <form>
              <input type={"text"} placeholder="Name" className="name" />
              <input type={"email"} placeholder="Email" className="email" />
              <textarea className="message"></textarea>
              <button className="send">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactRenderComponent;

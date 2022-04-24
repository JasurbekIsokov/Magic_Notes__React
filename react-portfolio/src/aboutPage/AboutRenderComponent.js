import React from "react";

class AboutRenderComponent extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about_title">
          <p>About</p>
          <hr />
        </div>
        <div className="myself">
          <div className="myself_title">abit about my self</div>
          <div className="myself_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            enim quo mollitia neque beatae quasi! Deleniti, quam dolores. Sit
            velit explicabo quasi esse, fuga rerum.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutRenderComponent;

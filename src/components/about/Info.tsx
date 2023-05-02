import React from "react";

const Info: React.FC = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="fa fa-trophy about__icon"></i>
        <h3 className="about__title">Offers inHand</h3>
        <span className="about__subtitle">3</span>
      </div>
      <div className="about__box">
        <i className="fa fa-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">15+ Projects</span>
      </div>
      <div className="about__box">
        <i className="fa fa-headphones about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;

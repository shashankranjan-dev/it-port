import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const Social: FC = () => {
  return (
    <div className="home__social">
      <Fade direction="up" triggerOnce>
        <a
          href="https://www.linkedin.com/in/shuvam-halder-8084b3157/"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={100} triggerOnce>
        <a
          href="https://github.com/shuvam2722"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={200} triggerOnce>
        <a
          href="https://www.instagram.com/iamsh27/"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={200} triggerOnce>
        <a
          href="https://m.facebook.com/shuvam.halder.18?eav=AfbpLbpC35G6gD9sw3LmfsNgwMN522A-QVHOBR1mNNQpyT3ynd8tGhhAsGGh_lfPE9s&paipv=0"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-facebook"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={300} triggerOnce>
        <a
          href="https://twitter.com/iamsh2722"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-twitter-alt"></i>
        </a>
      </Fade>
    </div>
  );
};

export default Social;

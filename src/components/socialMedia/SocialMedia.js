// src/components/socialMedia/SocialMedia.js
import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

const SocialMedia = () => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.dev ? (
        <a
          href={socialMediaLinks.dev}
          className="icon-button dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-dev icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.discord ? (
        <a
          href={socialMediaLinks.discord}
          className="icon-button discord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-discord icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium icon"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow icon"></i>
          <span></span>
        </a>
      ) : null}

      {/* New: WhatsApp */}
      {socialMediaLinks.whatsapp ? (
        <a
          href={socialMediaLinks.whatsapp}
          className="icon-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp icon"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
};

export default SocialMedia;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Middle() {
  return (
    <>
      <div className="hero">
        <h1>John Smith</h1>
        <p>Front-end Develeper</p>
        <small>johnsmith.website</small>
        <br></br>
        <div className="button-container">
          <button>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </button>
        </div>
      </div>
      <div className="text">
        <div>
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h3>Interests</h3>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </>
  );
}

export default Middle;

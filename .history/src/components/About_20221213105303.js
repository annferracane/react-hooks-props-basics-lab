import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.l}>github</a>
      <a href={}>linkedin</a>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
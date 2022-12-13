import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? }<p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.links.github}>github</a>
      <a href={props.links.linkedin}>linkedin</a>
    </div>
  );
}

export default About;

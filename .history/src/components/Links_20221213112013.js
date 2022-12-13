import React from "react";

function Links(props) {
    return (
        <>
            <h3>Links</h3>
            <a href={props.links.github}>{props.linksgithub}</a>
            <a href={props.links.linkedin}>{props.linkedin}</a>
        </>
    )
}

export default Links;
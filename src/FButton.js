import React from "react";

function FButton(props){
    console.log(props);
    return <button
        style={{
            color: props.textColor,
            backgroundColor: props.bgColor
        }}
        onClick={props.action}
    >{props.title}</button>;
}

export default FButton;

FButton.defaultProps = {
    title: "Default",
    textColor: "white",
    bgColor: "black",
    action: () => {console.log("default action clicked")}
}

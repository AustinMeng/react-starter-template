import React, {useState} from "react"

function Greeting(){
    const [text, setText] = useState("default state message");

    let msg = "default message";

    function updateMsg(e){
        msg = e.target.value;
        //text = e.target.value;
        setText(e.target.value);
        console.log(msg);
    }
    return (
        <div>
            <h3>Greeting</h3>
            <hr />
            <input placeholder="type your text" onChange={updateMsg}></input>

            <h5>Message: {msg}</h5>
            <h5>State Message: {text}</h5>
            {/* conditional rendering */}
            <h5>State Message: 
                {text.length > 0? text:"default state message"}
            </h5>

            {
                text.length > 0?<h5>{text}</h5>:<h5>default state message</h5>
            }
        </div>
    )
}

export default Greeting;
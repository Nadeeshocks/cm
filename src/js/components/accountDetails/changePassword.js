import React from "react"


export default props => {
    return (
        <div className="change-password">
            <h6>CHANGE PASSWORD</h6>
            <hr />
            <input id="currentPassword" type="password" placeholder="CURRENT PASSWORD" onChange={props.onTextInput} />

            <input id="confrimPassword" type="password" placeholder="CONFRIM PASSWORD" onChange={props.onTextInput} />

            <input id="newPassword" type="password" placeholder="NEW PASSWORD" onChange={props.onTextInput} />

            <span>
                {props.passwordStatus ? props.passwordStatus.msg : null}
            </span>

            <button onClick={props.onSubmit}> SUBMIT</button>
        </div>
    )
}
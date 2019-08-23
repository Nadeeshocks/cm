import React, { Component } from 'react'

export default props => {

        const user = props.user
        return (
            user && <div className="user-info">
                <h6>Info</h6>
                <hr />
                <div className="inputfield">
                    <span>NAME</span>
                    <input type="text" value={user.fullName} onChange={ props.onChange } id="fullName"/>
                </div>
                <div className="inputfield">
                    <span>EMAIL</span>
                    <input type="email" value={user.email} disabled/>
                </div>
                <div className="inputfield">
                    <span>PHONE NUMBER</span>
                    <input type="tel" value={user.phoneNumber} onChange={ props.onChange } id="phoneNumber"/>
                </div>
                
                <span>
                    { props.userUpdateStatus ?  props.userUpdateStatus : null}
                </span>
                <button onClick={props.onSubmit}> SUBMIT</button>
            </div>
        )
}
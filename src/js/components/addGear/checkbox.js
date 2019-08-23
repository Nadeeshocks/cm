import React from 'react'
import { Label } from 'reactstrap';

export default props => {
    return (
        <div className="theme-form-field">
            <input type="checkbox" id="is-kit" checked={props.isKit} onChange={props.onInputhandle} name="isKit"/>
            <Label for="is-kit">Is this a Kit?</Label>
        </div> 
    )
}
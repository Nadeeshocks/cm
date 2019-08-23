import React from 'react'
import Chips, { Chip } from 'react-chips';

export default props => {
    return(
        <div>
            <div className="theme-text-small">Accessories</div>
            <div className="theme-form-field">
                <Chips
                    
                    placeholder="Add Accessories Here"
                    value={props.pstate.accessories}
                    onChange={props.onHandleChips}
                    suggestions={["Your", "Data", "Here"]}
                    
                />
            </div>
        </div>
    )
}
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Input} from 'reactstrap';

export default class CustomInput extends Component {
  render() {
    const { placeholder, type ,label, value, icon, required } = this.props;
    return (
      <div className="input-field">
        <label htmlFor={label} className="theme-text-small label">{label}</label>
        <input
            name={this.props.name}
            placeholder={ placeholder }
            type = {type}
            required = { required || false }
            onChange={this.props.onChange}
            value={value}
            className="form-control"
        />
      </div>
      // <div className= {icon ? "custom-input custom-input-with-icon" : "custom-input"}>
      //   <label htmlFor={label} className="theme-text-small label">{label}</label>
      //   { showPlaceholder ?
      //     <label className="placeholder-label">{placeholder}</label> : null
      //   }
      //   {
      //     icon ? <i className={"fa " + icon } /> : null
      //   }
      //   <Input
      //     name={this.props.name}
      //     placeholder={ placeholder }
      //     type = {type}
      //     required = { required || false }
      //     onChange={this.props.onChange}
      //     value={value}
      //     />
      // </div>
    );
  }
}


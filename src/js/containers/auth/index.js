import React,{ Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class UserRegisterForm extends Component{


 validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    } else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Password does not match'
    }


    return errors
}




 warn = values => {
    const warnings = {}
    if (values.phone < 11) {
        warnings.phone = 'Hm '
    }
    return warnings
}

 renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
    <div>
        <label>
            {label}
        </label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error &&
                    <span>
                        {error}
                    </span>) ||
                    (warning &&
                        <span>
                            {warning}
                        </span>))}
        </div>
    </div>





 render(){
    const { handleSubmit, pristine, reset, submitting } = this.props



    
    return (
        <div>
             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field name="email" type="email" component={renderField} label="Email" />
                <Field name="name" type="text" component={renderField} label="Name" />
                <Field name="phone" type="text" component={renderField} label="Phone Number" />
                <Field name="password" type="password" component={renderField} label="Password" />
                <Field name="confirmpassword" type="password" component={renderField} label="Confirm Password" />
                <Field name="photo" type="file" component={renderField} label="Photo" />
                <div>
                    <button type="submit" disabled={submitting}>
                        Sign Up
                    </button>
                </div>
            </form>
            <Link to="/sign" className="btn btn-danger">Sign in</Link>

        </div>
    )
}
onSubmit(values){
       
    this.props.registerUser(values=>{
    this.props.history.push('/login');
    }

    );
}

}
export default reduxForm({
    form: 'registerUser', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})( 
    connect(null,{})(UserRegisterForm
    ))
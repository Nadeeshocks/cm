import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser, changePassword, updateUser } from './action'
import UserDetails from '../../../components/accountDetails/userDetails'
import ChangePassword from '../../../components/accountDetails/changePassword'
import { dispatch } from 'C:/Users/Rameez Raja/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';


class AccountDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPassword: null,
            confrimPassword: null,
            newPassword: null,
            fullName: null,
            phoneNumber: null
        };
    }

    componentDidMount() {
        // this.props.getUser();   
        const user = this.props.user;
        user && this.setState({
            "fullName": user.fullName,
            "email": user.email,
            "phoneNumber": user.phoneNumber
        })

    }

    // componentDidUpdate(){
    //     const user = this.props.user.users;
    //     if(this.state.fullName == null){
    //         user && this.setState({
    //             "fullName" : user.fullName,
    //             "email" : user.email,
    //             "phoneNumber" : user.phoneNumber
    //         })
    //     }  
    // }

    onTextInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }
        )
    }

    onSubmit = () => {
        //  console.log (this.Validate())
        const { currentPassword, confrimPassword, newPassword } = this.state;
        this.props.changePassword(currentPassword, confrimPassword, newPassword)
    }

    updateUserInfo = () => {
        const { fullName, phoneNumber } = this.state;
        this.props.updateUser(fullName, phoneNumber);
    }

    render() {

        const userUpdateStatus = this.props.userUpdateStatus
        const { fullName, email, phoneNumber } = this.state;
        const passwordStatus = this.props.passwordChangeStatus;
        return (
            <div className="account-details">
                <div className="user-details">

                    <UserDetails user={{ fullName, email, phoneNumber }} userUpdateStatus={userUpdateStatus} onChange={this.onTextInput} onSubmit={this.updateUserInfo} />
                    <ChangePassword onTextInput={this.onTextInput} onSubmit={this.onSubmit} passwordStatus={passwordStatus} />
                </div>

                <div className="payment-meathod">
                    <div>
                        <h6>PAYMENT MEATHOD</h6>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // user : state.accountDetail,
        userUpdateStatus: state.accountDetail.userUpdateStatus,
        passwordChangeStatus: state.accountDetail.status
    }
}

export default compose(
    connect(mapStateToProps, {
        getUser, changePassword, updateUser
    })
)(AccountDetails);
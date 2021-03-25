import React from 'react'
import { connect } from 'react-redux'
import { SignIn, SignOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "1034176590722-6b9cv8mtudp9di3v2fu5nvhudq09qgfc.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                // Listen for sign-in state changes.
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SignInUser(this.auth.currentUser.get().getId());
        } else {
            this.props.SigOutUser();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSingOutClick = () => {
        this.auth.signOut();
    }

    renderAuthStatus() {
        if (this.props.isSigned === null) {
            return null;
        } else if (this.props.isSigned) {
            return (
                <div>
                    <button onClick={this.onSingOutClick} className="ui red google button">
                        <i className="google icon"></i>
                    Sign Out
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} className="ui red google button">
                        <i className="google icon"></i>
                    Sign In
                    </button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.renderAuthStatus()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSigned: state.auth.IsSignedIn
    }
}

export default connect(mapStateToProps, {
    SignInUser: SignIn, SigOutUser: SignOut
})(GoogleAuth);
import React from 'react';
import {connect} from 'react-redux'; 
import {signIn,signOut} from '../actions'; 

class GoogleAuth extends React.Component {
    //dont need this line as mapstatetoprops
   // state = {isSignedIn: null}; //dont know if signed in or not at start

    //want to initalise only once when first rendered
    componentDidMount( ) {
        window.gapi.load('client:auth2', () => {
            //asynchronous - takes some time to reach google servers, need call back once loaded
            window.gapi.client.init({
                clientId: '632603483086-ieauatod2hrjd4lc4oi0sj6rd6n2tms2.apps.googleusercontent.com',
                //what we want from the client
                scope: 'email'

            }).then(() => { //init is a promise - when library initialises it will run .then
                //can sign in, sign out and print auth status
                this.auth = window.gapi.auth2.getAuthInstance();
                //gets status of sign in
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() })

                this.onAuthChange(this.auth.isSignedIn.get());
                //event listener to see status for updating live 
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    //any time auth status changes - inSignedIn flag
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(); //action creator
        } else {
            this.props.signOut();
        }


        //get status of object state from auth, called with boolean argument
        //OLD - this.setState({isSignedIn: this.auth.isSignedIn.get() });
    };

    //sign in helper method
    onSignInClick = () => {
        this.auth.signIn();
    }

    //sign out helper method 
    onSignOutClick = () => {
        this.auth.signOut();
    }

    //helper method- check sign in
    renderAuthButton() {

        if(this.props.isSignedIn === null) {
            return null; //return nothing at first then we dont know yet
        } else if (this.props.isSignedIn) { //true
            //sign out button
            return (
                //no () needed for onSignOut as we dont want it to render the first instance on screen
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
            );
        } else { //false
            //sign in button
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
                );
        } 
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn} //isSignedIn can be null true or false
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
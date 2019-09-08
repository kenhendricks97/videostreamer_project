import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}; //dont know if signed in or not at start

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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }
    
    //helper method- check sign in
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div> i dont know </div>
        } else if (this.state.isSignedIn) { //true
            return <div> Signed In </div>
        } else { //false
            return <div> Signed Out </div>
        } 
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;
import React from 'react';

class GoogleAuth extends React.Component {
    //want to initalise only once when first rendered
    componentDidMount( ) {
        window.gapi.load('client:auth2', () => {
            //takes some time to reach google servers, need call back once loaded
            window.gapi.client.init({
                clientId: '632603483086-ieauatod2hrjd4lc4oi0sj6rd6n2tms2.apps.googleusercontent.com',
                //what we want from the client
                scope: 'email'

            });
        });
    }
    
    render() {
        return <div> Google Auth </div>
    }
}

export default GoogleAuth;
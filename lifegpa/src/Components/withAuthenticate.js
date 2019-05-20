import React from 'react';

const withAuthenticate = Dashboard => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }
    
    }

    export default withAuthenticate;

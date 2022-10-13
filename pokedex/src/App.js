import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import Header from './Header';




class App extends React.Component {


    render() {
        return (
            <>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&family=Dancing+Script:wght@600&family=Kalam&family=Noto+Sans:wght@200;500&family=Noto+Serif+HK:wght@500;800&family=Press+Start+2P&display=swap');
                </style>
            <Header/>
                <div>
                     <AuthButtons />
                </div>
                {this.props.auth0.isAuthenticated &&
                    <>
                        <Profile />
                    </>
                }
            </>
        )
    }
}
export default withAuth0(App);
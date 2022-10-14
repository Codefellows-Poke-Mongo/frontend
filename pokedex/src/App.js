import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Footer';
import AboutMe from './AboutMe';
import Login from './Auth/Login';



class App extends React.Component {
    render() {
        return (
            <>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&family=Dancing+Script:wght@600&family=Kalam&family=Noto+Sans:wght@200;500&family=Noto+Serif+HK:wght@500;800&family=Press+Start+2P&display=swap');
                </style>
                <Header />
                <div className="mx-4">
                    <AuthButtons />
                </div>
                {!this.props.auth0.isAuthenticated &&
                    <section class="nes-container is-dark  nes-input is-primary nes-text my-4 mx-3 p-5 mx-auto  w-75  d-flex flex-row">
                        <section class="message-list">
                            <section class="message -left">
                                <i class="nes-ash"></i>
                                <div class="nes-balloon from-left is-dark ">
                                    <p>Welcome to PokeMongo! <Login /> to enter the Pokeverse </p>
                                </div>
                            </section>

                            <section class="message -right">

                                <div class="nes-balloon from-right is-dark">
                                    <p>Gotta Cache'm *!</p>
                                </div>
                                <i class="nes-squirtle"></i>
                            </section>
                        </section>
                    </section>
                }
                {this.props.auth0.isAuthenticated &&
                    <>
                        <Profile />
                    </>
                }
                <Router>
                    <Routes>
                        <Route
                            path="/AboutMe"
                            element={<AboutMe />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </>
        )
    }
}
export default withAuth0(App);
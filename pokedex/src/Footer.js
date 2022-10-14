import React from 'react';
import { CDBFooter, CDBBox } from 'cdbreact';
import { Link } from 'react-router-dom'



class Footer extends React.Component {
    render() {
        return (
            <>
                <CDBFooter >
                    <CDBBox
                        display="flex"
                        justifyContent="between"
                        alignItems="center"
                        className="mx-auto py-2 flex-wrap bottom my-5 is-dark nes-input is-primary nes-text"
                        style={{ width: '99%' }}
                    >
                        <CDBBox display="flex" alignItems="center">
                            <small className="ml-2">&copy; Team PokeMongo, 2022. All rights reserved.</small>
                        </CDBBox>
                        
                        <CDBBox display="flex">
                            <nav>
                                <Link to='/AboutMe'>About Us</Link>
                            </nav>
                        </CDBBox>
                        <CDBBox display="flex">
                            <a href="/AboutMe" className="d-flex align-items-center p-0 text-dark">
                                <i class="nes-octocat animate"></i>
                                <span className="ml-4 h5 mb-0 font-weight-bold">PokeMongo</span>
                            </a>
                        </CDBBox>
                    </CDBBox>
                </CDBFooter>
              
            </>
        )
    }
}

export default Footer;
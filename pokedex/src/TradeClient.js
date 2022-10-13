import React from "react";
import { io } from "socket.io-client";

class TradeClient extends React.Component {
    
    const socket = io("https://poke-mongo-backend.herokuapp.com");
   
    render() {
        return (
            <>
            </>
        )
    }
}

export default TradeClient;
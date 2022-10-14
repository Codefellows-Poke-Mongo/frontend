// import React from "react";
// import { io } from "socket.io-client";
// import Button from 'react-bootstrap/Button';
// //const socket = io("https://poke-mongo-backend.herokuapp.com", {withCredentials: true});

// export default class TradeClient extends React.Component {

//     componentDidMount() {
//         socket.on("connect", () => {
//             console.log(socket.connected);
//         });
        
//         socket.on("disconnect", () => {
//             console.log(socket.connected);
//         });
        
//         socket.on("connect", () => {
//             const engine = socket.io.engine;
//             console.log(engine.transport.name);
//             engine.once("upgrade", () => {
//                 console.log(engine.transport.name);
//             });
        
//         engine.on("packet", ({ type, data }) => {
                
//               });
//         })
//     }

//     render() {
//         return (
//             <>
//                 <Button className="nes-btn is-normal is-warning my-2" type="button" variant="primary">Trade Me!</Button>
//             </>
//         )
//     }
// }


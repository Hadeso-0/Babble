import io from "socket.io-client";

let socket;
// process.env.SERVER_URL || 
const connectSocket = () => {
  socket = io("http://localhost:5004");
}

export { socket, connectSocket };

let connected = false;

let socket = io("http://localhost:5000");

socket.emit("setup", userLoggedIn);

socket.on("connected", () => {
  connected = true;
});


socket.on("message received", (newMessage ) => {
 return messageReceived(newMessage)
});



const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

const PORT = 3001; // Choose a port for your server

server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle events here
  socket.on("translatedText", (data) => {
    // Broadcast the translated text to all other connected users
    socket.broadcast.emit("translatedText", data);
  });

  // Add more event handlers as needed
});

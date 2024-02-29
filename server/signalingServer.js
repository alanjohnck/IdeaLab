const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const PORT = 3001; // Choose a port for your server

server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("A user connected");

  let buffer = '';
  let timeout = null;

  // Handle events here
  socket.on("translatedText", (data) => {
    buffer += ' ' + data;

    // Clear the previous timeout
    if (timeout) {
      clearTimeout(timeout);
    }

    // Set a new timeout
    timeout = setTimeout(() => {
      // Broadcast the buffered text to all other connected users
      socket.broadcast.emit("translatedText", buffer);

      // Clear the buffer
      buffer = '';
    }, 500); // Wait for 1 second of silence before emitting
  });

  // Add more event handlers as needed
});
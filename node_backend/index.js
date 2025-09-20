const { Server } = require("socket.io"); // Import the Socket.IO server
const { v4: uuidv4 } = require('uuid');// Import the UUID library for generating unique IDs

const io = new Server({ cors: { origin: "*" } }); // Allow CORS for all origins

io.on("connection", (socket) => { // When a client connects
  const id = uuidv4()
  socket.emit("id", id) // Send a unique ID to the connected client
  io.emit("connection", id) // Notify all clients about the new connection
  socket.on("update", (data) => { // Listen for "update" events from clients
    console.log(data) // Log the received data
    io.emit("stateUpdate", data) // Broadcast the data to all connected clients
  })

  socket.on("disconnect", () => { // When a client disconnects
    io.emit("disconnection", id) // Notify all clients about the disconnection
  })
});

io.listen(3000); // Start the server on port 3000 
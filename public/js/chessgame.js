const socket = io();

socket.emit("samosa");
socket.on("chatni", function () {
  console.log("chatni mil gya");
});

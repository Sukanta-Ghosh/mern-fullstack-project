console.log("I am working");
// then you connect with the server
const socket = io();

const sendBtn = document.querySelector(".send");
const messageInput = document.querySelector(".msg");
const messageContainer = document.querySelector(".messages");

const grpBtn = document.getElementById("createGrp");
const joinGrp = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
// const leaveRoomBtn = document.getElementById("leave");

/** Group **/
grpBtn.addEventListener("click", function () {
  socket.emit("createGroup", Math.floor(Math.random(0, 1) * 1000));
});

joinGrp.addEventListener("click", function () {
  socket.emit("joingroup");
});

stg.addEventListener("click", function () {
  socket.emit("groupmessage", messageInput.value);
  messageInput.value = "";
});

// Broadcast message
sendBtn.addEventListener("click", () => {
  // add message to UI
  if (messageInput.value == "") return;
  const sender = document.createElement("div");
  sender.setAttribute("class", "sender");
  sender.innerHTML = "You:" + messageInput.value;
  // send the message to the server
  messageContainer.appendChild(sender);
  socket.emit("message", messageInput.value);
  messageInput.value = "";
});

/** Private messaging **/
const recieverSocket = document.querySelector(".reciversocket");
const addSocketBtn = document.querySelector(".addsocket");

addSocketBtn.addEventListener("click", () => {
  if (messageInput.value == "") return;
  if (recieverSocket.value == "") return;
  socket.emit("private", {
    message: messageInput.value,
    recieverSocket: recieverSocket.value,
  });
  messageInput.value = "";
  recieverSocket.value = "";
});

/** Socket listeners **/

socket.on("personal", sendMsgHeper);

socket.on("broadCastMessage", sendMsgHeper);

socket.on("serv_grp_message", sendMsgHeper);

function sendMsgHeper(data) {
  const reciever = document.createElement("div");
  reciever.setAttribute("class", "reciever");
  reciever.innerHTML = "sender:" + data;
  messageContainer.appendChild(reciever);
}

socket.on("message", (data) => {
  console.log(`message from server : ${data}`);
});

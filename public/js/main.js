const socket = io();
const messageText = document.querySelector("#messageText");
const btnSend = document.querySelector("#btnSend");
const chatList = document.querySelector("#chatList");
const formChat = document.querySelector("#formChat");
const userName = document.querySelector("#userName");
const btnName = document.querySelector("#btnName");
const modal = document.querySelector("#modal");
let nameUser = "";
btnName.addEventListener("click",(event)=>{
  nameUser = userName.value
  modal.remove()
})
socket.on("server_chat",({name,message})=>{
  if(nameUser === name)
    chatList.innerHTML += `
    <li class="chat-list-item my-chat">
      <h2 class="chat-list-item__name">${name}</h2>
      <p class="chat-list-items__message">${message}</p>
    </li>
    `
  else
    chatList.innerHTML += `
    <li class="chat-list-item">
      <h2 class="chat-list-item__name">${name}</h2>
      <p class="chat-list-items__message">${message}</p>
    </li>
    `
})
formChat.addEventListener("submit",(event)=>{
  event.preventDefault()
  socket.emit("user_chat",{
    name : nameUser,
    message : messageText.value
  })
  messageText.value = ""
})  
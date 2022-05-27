'use strict'

const chat = document.querySelector("#chat>ul");

ComfyJS.onChat = (user, message, flags, self, extra) => {
    const newMessage = document.createElement("li");
    const text = document.createElement("blockquote");

    newMessage.innerText = user;
    text.innerText = message;

    newMessage.append(text);
    chat.append(newMessage);
}
ComfyJS.Init("TomTheNeatGuy");
const socket = io("http://localhost:3000", { });

const clientTotalElement = document.getElementById('client-total');
const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const messageForm = document.getElementById('message-form');
const messageTone = new Audio('/message-tone.mp3');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage();
});

socket.on('clients-total', (total) => {
  clientTotalElement.innerText = `Total clients: ${total}`;
});

socket.on('chat-message', (data) => {
    messageTone.play();
  addMessageToUI(false, data);
});

function sendMessage() {
    if(messageInput.value.trim() === '') return;
  const data = {
    name: nameInput.value,
    message: messageInput.value,
    dateTime: new Date(),
  };
  socket.emit('message', data);
  addMessageToUI(true, data);
  messageInput.value = '';
}

function addMessageToUI(isOwnMessage, data) {
    clearFeedback();
  const element = `
      <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
          <p class="message">
            ${data.message}
            <span>${data.name} ● ${moment(data.dateTime).fromNow()}</span>
          </p>
        </li>
        `;
  messageContainer.insertAdjacentHTML('beforeend', element);
scrollToBottom();
}

function scrollToBottom() {
  messageContainer.scrollTo(0, messageContainer.scrollHeight);
}

messageInput.addEventListener('focus',(e) => {
  socket.emit('feedback', { feedback: `${nameInput.value} is typing a message` });
});

messageInput.addEventListener('keydown', (e) => {
socket.emit('feedback', { feedback: `${nameInput.value} is typing a message` });
});

messageInput.addEventListener('blur', (e) => {
  socket.emit('feedback', { feedback: '' });
});

socket.on('feedback', (data) => {
  clearFeedback()
  const element = `
        <li class="message-feedback">
          <p class="feedback" id="feedback">${data.feedback}</p>
        </li>
  `
  messageContainer.innerHTML += element
})

function clearFeedback() {
  document.querySelectorAll('li.message-feedback').forEach((element) => {
    element.parentNode.removeChild(element)
  })
}
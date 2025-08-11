# 💬 ChatApp – Real-Time Chat Application

ChatApp is a simple real-time chat app built using **Node.js**, **Express**, and **Socket.IO**.  
It allows multiple users to join, send messages, and see when others are typing – all in real time.

---

## 🚀 Features
- **Real-time messaging** using Socket.IO
- **Typing indicators** to see when someone is writing
- **Sound notifications** for new messages
- **Responsive UI** with clean design
- **Client counter** showing total connected users
- Messages display **relative time** (e.g., "a few seconds ago") with Moment.js

---

## 🛠 Tech Stack
**Frontend**
- HTML5, CSS3, JavaScript
- Font Awesome icons
- Moment.js for time formatting

**Backend**
- Node.js
- Express.js
- Socket.IO

---

## 📂 Project Structure
```
.
├── app.js               # Server-side logic with Express and Socket.IO
├── index.html           # Chat UI
├── main.js              # Client-side JS handling sockets & DOM
├── style.css            # Styling for the chat UI
├── message-tone.mp3     # New message notification sound
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Dependency lock file
└── public/              # Static assets (served by Express)
```

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/benbaiju/ChatApp.git
   cd ChatApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start
   ```
   By default, the server runs on [http://localhost:3000](http://localhost:3000).

---

## 💻 Usage
1. Open `http://localhost:3000` in your browser.
2. Change your username in the name input field (optional).
3. Start chatting!
4. Open the app in multiple browser tabs or devices to test real-time features.

---

## ⚙ Configuration
- **Port**: Default is `3000`. Change it in `app.js`:
  ```js
  const PORT = process.env.PORT || 3000;
  ```

---

## 🔮 Future Improvements
- User authentication & login system
- Chat rooms / channels
- Message persistence with a database (MongoDB, PostgreSQL, etc.)
- File and image sharing

---

## 📜 License
This project is licensed under the **ISC License** – feel free to use, modify, and distribute.

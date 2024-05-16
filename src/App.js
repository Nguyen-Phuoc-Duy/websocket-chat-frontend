// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SendMessageForm from './components/SendMessageForm';
import MessageList from './components/MessageList';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (username, message) => {
    try {
      await axios.post('http://localhost:5000/api/messages', { username, message });
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>Message App</h1>
      <SendMessageForm sendMessage={sendMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;

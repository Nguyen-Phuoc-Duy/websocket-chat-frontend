// MessageList.jsx
import React from 'react';

function MessageList({ messages }) {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.username}:</strong> {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;

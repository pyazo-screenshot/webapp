import React, { useState } from 'react';
import io from 'socket.io-client';

import { Button } from '../components/Button';

export function SocketPage() {
  const [questions, setQuestions] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socket = io('http://localhost');

  socket.on('question:asked', function (data) {
    setQuestions((prev) => [...prev, data]);
  });

  socket.on('connect', function () {
    console.log('Socket connected');
  });

  function onSubmit() {
    socket.emit('chat:join', '1');
    setIsConnected(true);
  }

  return (
    <div>
      <Button onClick={onSubmit}>Subscribe to chat 1</Button>
      <p>Socket to room 1 is:{!isConnected && ' not'} connected</p>
      <ul>
        {questions.map((x, index) => (
          <li key={index}>{JSON.stringify(x)}</li>
        ))}
      </ul>
    </div>
  );
}

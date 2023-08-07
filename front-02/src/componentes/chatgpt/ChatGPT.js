import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessageToChatGPT = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: message,
          max_tokens: 100,
          temperature: 0.7,
          stop: '\n',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Substitua pela sua chave da API
          },
        }
      );
  
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Erro ao enviar a mensagem para o ChatGPT:', error.message);
      return 'Desculpe, algo deu errado. Por favor, tente novamente.';
    }
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    const userMessage = userInput.trim();
    setChatLog([...chatLog, { type: 'user', message: userMessage }]);
    setUserInput('');

    const chatGPTResponse = await sendMessageToChatGPT(userMessage);
    setChatLog([...chatLog, { type: 'chatGPT', message: chatGPTResponse }]);
  };

  return (
    <div>
      <div>
        {chatLog.map((entry, index) => (
          <div key={index}>
            <strong>{entry.type === 'user' ? 'You:' : 'ChatGPT:'}</strong> {entry.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your question..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatGPT;

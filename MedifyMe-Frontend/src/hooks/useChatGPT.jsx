import { useState, useEffect } from "react";

function useChatGPT({ content, InitialMessage }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const systemMessage = {
    role: "system",
    content: content,
  };

  const [messages, setMessages] = useState([
    {
      message: InitialMessage ,
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    await processMessageToChatGPT(newMessages);
  };

  // useEffect(() => {
  //   const lastElement = messages[messages.length - 1];
  //   if (lastElement.message.includes("{")) {
  //     const reqMsg = lastElement.message;
  //     // console.log(lastElement);
  //     let init = reqMsg.indexOf("{");
  //     let fin = reqMsg.indexOf("}");
  //     let json = reqMsg.substr(init, fin - init + 1);
  //     const jsonObject = JSON.parse(json);

  //     console.log(jsonObject);
  //   } else {
  //   }
  // }, [messages]);

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      });
  }

  return { messages, handleSend };
}

export default useChatGPT;

import { useState, useEffect } from "react";

const systemMessage = {
  role: "system",
  content: `Check sample.json which is 
{ "name": "Saiyam", "age": 50, "gender": "male", "weight": 80, "height": 150, "allergies": "none", "other conditions": "none", "medications": "none", "overview of patient": "Saiyam is a 50-year-old male who is currently experiencing a fever. He has not noticed any other symptoms or medical issues in the recent past, and does not have any chronic conditions or allergies. No medications are being taken currently." }

Whenever I type give me sample , I want you to send me this json in the same format with random values filled in from your side. Keep all values less than 10 words in strings. Can you do this? (only answer yes/ no for this question)`,
};

function useChatGPT() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [messages, setMessages] = useState([
    {
      message:
        "Hello! Welcome to MedifyMe, I ayukumi an AI-powered medical health record management system. To start, we want to inform you that we take your privacy and security very seriously. We adhere to all applicable data protection laws, and any personal information collected will only be used for the purpose of providing healthcare services to you. By signing up, you consent to the collection, use, and storage of your personal information by MedifyMe . \n\nNow, may I have your name, please?",
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
